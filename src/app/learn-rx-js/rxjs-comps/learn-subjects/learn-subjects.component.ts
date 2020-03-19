import { Component, OnInit } from '@angular/core';
import {AsyncSubject, BehaviorSubject, ConnectableObservable, from, interval, Observable, Subject} from "rxjs";
import {ReplaySubject} from "rxjs";
import {multicast, refCount, takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-learn-subjects',
  templateUrl: './learn-subjects.component.html',
  styleUrls: ['./learn-subjects.component.css']
})
export class LearnSubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let counter = interval(1000).subscribe(sec=>console.log(sec + " seconds"));

    // this.do1();
    // this.do2();
    //this.do3WithRefCount();
    // this.do4BeahviorSubject();
    // this.do5WithRegular();
    // this.do6WithReplaySubject();
    this.doDraftiTries();


    let regularSubj = new Subject();
    let behaviorSubj = new BehaviorSubject(0);
    let replaySubj = new ReplaySubject(3);
    let asyncSubj = new AsyncSubject();



    // this.do7WithSubjectParam(behaviorSubj);







    //important to rememeber ***
    // console.log("Clone object on JS ");
    // let varA = ["a", "b","c"];
    // let varB = varA;
    // varA.push("e");
    // console.log(varB)
    // let varC = Object.assign([],varB);
    // varC.push("I");
    // console.log(varB)
    // console.log(varC)

  }

  do1(){
    console.log("do1 - ");


    //u CAN REGISTER A LOT OF ACTIONS TO ONE SUBJECT
    const subj1 = new Subject<number>();
    subj1.next(2);
    console.log("Regular subject don't trigger next when subscribed unlike the specialized Subjects ");
    subj1.subscribe({
      next: this.func1
    });

    subj1.subscribe({
      next: this.func2
    });
    subj1.next(8);

    //Yet get the idea , and subject is vice versa from observable - it's observer !

    //But we can pass it to observable :

    const observable = from([134, 222, 344]);

    observable.subscribe(subj1);

    const obs1 = interval(5000);

   let subscribe1 =  obs1.subscribe(this.func1);
    let subscribe2 =  obs1.subscribe(this.func2);

    setTimeout(()=>{
      subscribe1.unsubscribe();
      subscribe2.unsubscribe()
    }, 15000)

  }//do1

  do2(){
    console.log("do2 - ");

    console.log("The same is happen when we use multicasted operator ");

    const obs1 = from(["A", "B", "C"]);
    let subj1 = new Subject();
    let obsThatMultiCasted = obs1.pipe(
      multicast(subj1)
    ) as ConnectableObservable<string>;//--> workaround for solving the bug
    //Now I can subscribe this like to Regular subject :
    obsThatMultiCasted.subscribe( {next:this.func1});
    obsThatMultiCasted.subscribe({next: this.func2});
    let subscription1 = obsThatMultiCasted.connect();

    //subscription1.unsubscribe();//U can unsubscribe from it in the next


    //Here U can see how you can to use refCount with multicasted for tell the multicasted to start when subscribed, and stop when there is no subscribed.
    /* */

    let con1;
    //create the mutlti casted and need manually to unsubscribe at the end for stop this.
    let obs2 = interval(2000).pipe(
      tap(()=>console.log("Observer continue..."))
    );
    let subj2 = new Subject();
    let mulCas2 = obs2.pipe(
      multicast(subj2)
    ) as ConnectableObservable<string>;

    //subscribe function 1
    let subscribed1 = mulCas2.subscribe((v)=>{
      console.log("Observer 1 - Subscribe me from the start " , v);
    });
    setTimeout(()=>{
      console.log("Start execution after 1 second with connect()");
      con1 = mulCas2.connect();
    }, 1000);
    let subscribed2;
    //subscribe function 2 after 5 seconds
    setTimeout(
      ()=>{
        console.log("subscribe observer 2 after 5 seconds ");
         subscribed2 = mulCas2.subscribe(
          {next: (v) => {

            console.log("Observer 2 - Subscribe  me after 5 second ", v);
          }
        });}, 5000);

    //unsubscribe observer1 after 9 seconds ....
    setTimeout(()=>{
      console.log("unsubscribe observer1 after 9 seconds .... ");
      subscribed1.unsubscribe();
    },9000);


    //unsubscribe observer2 after 13 seconds ....
    setTimeout(()=>{
      console.log("/unsubscribe observer2 after 13 seconds ....");
      subscribed2.unsubscribe();
    },13000);

    //Stopping observable because it's empty of subscribers  (After 20 second
    setTimeout(()=>{
      console.log("Stopping observable because it's empty of subscribers  (After 20 second");
      con1.unsubscribe();
    },20000);

    //U here - tomoorrow show the above how to do with refCount and give up on the connect and its unsubscribed.


  }
  do3WithRefCount(){
    console.log("do3 - " +
      "\n here U can see how I implements what's happen in do2, but without the necessary to start and end the the obseravle subscriber ");


    const obs1 = from(["A", "B", "C"]);
    let subj1 = new Subject();
    let refCounter = obs1.pipe(
      multicast(subj1),
      refCount()
    ) as ConnectableObservable<string>;//--> workaround for solving the bug
    //Now I can subscribe this like to Regular subject :
    refCounter.subscribe( {next:this.func1});
    refCounter.subscribe({next: this.func2});
    // let subscription1 = obsThatMultiCasted.connect(); //We don't need this - because it's starting right away when it subscribed

    //subscription1.unsubscribe();//U can unsubscribe from it in the next


    //Here U can see how you can to use refCount with multicasted for tell the multicasted to start when subscribed, and stop when there is no subscribed.
    /* */

    let con1;
    //create the mutlti casted and need manually to unsubscribe at the end for stop this.
    let obs2 = interval(2000).pipe(
      tap(()=>console.log("Observer continue..."))
    );
    let subj2 = new Subject();
    let refCounted2 = obs2.pipe(
      multicast(subj2),
      refCount()
    ) as ConnectableObservable<string>;

    //subscribe function 1
    let subscribed1 = refCounted2.subscribe((v)=>{
      console.log("Observer 1 - Subscribe me from the start " , v);
    });
    setTimeout(()=>{
      console.log(" execution Start by itself when subscription subscribed with refcounte ");
      // con1 = mulCas2.connect();
    }, 1000);
    let subscribed2;
    //subscribe function 2 after 5 seconds
    setTimeout(
      ()=>{
        console.log("subscribe observer 2 after 5 seconds ");
        subscribed2 = refCounted2.subscribe(
          {next: (v) => {

              console.log("Observer 2 - Subscribe  me after 5 second ", v);
            }
          });}, 5000);

    //unsubscribe observer1 after 9 seconds ....
    setTimeout(()=>{
      console.log("unsubscribe observer1 after 9 seconds .... ");
      subscribed1.unsubscribe();//this generate error apparently because the observable empty.
    },9000);



    //unsubscribe observer2 after 13 seconds ....
    setTimeout(()=>{
      console.log("/unsubscribe observer2 after 13 seconds ....");
      console.log("Observable multicasted should stop by iteself because there are no subscriptions to it. With refCount")
      subscribed2.unsubscribe();
    },13000);
    let subscription3 ;
    //Stopping observable because it's empty of subscribers  (After 20 second
    setTimeout(()=>{
      console.log("Starting again by subscribe after 20 seconds ");
      subscription3 = refCounted2.subscribe({next: (x)=>{
        console.log("Now subscribing again. ");

      }})
    },20000);

    //Stopping observable because it's empty of subscribers  (After 20 second
    setTimeout(()=>{
      console.log("Now unsubscribing again. After 35 seconds ");
      subscription3.unsubscribe();
    },35000);
  }

  do4BeahviorSubject(){
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(3);
    subject.subscribe({next:(v=>{
      console.log("Observer C (new observer will show only the last value i behavior subject  ): " , v);
      })})
    subject.next(9)

// Logs
// observerA: 0
// observerA: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
    console.log("My demo - subscribing new value each 3 second and subscribe new observer after 14 seconds");

    const subject2 = new BehaviorSubject(0); // 0 is the initial value
    let counter = 1;
    let interv=setInterval(()=>{
      subject2.next(counter++);
    },3000);
    subject2.subscribe({next:(v)=>console.log("1st observer value subscribed : " + v)})

    setTimeout(()=>{
      console.log(" subscribing another observer after 14 seconds");
      subject2.subscribe({next:(v)=>console.log("2nd observer value subscribed : " + v)})
    },14000);

    setTimeout(()=>{
      console.log("Stopping after 40 seconds");
      subject2.unsubscribe();
      clearInterval(interv);
    },40000);



  }

  do5WithRegular(){
    console.log("In regualr state the new subscriber will read all the old values. ")
    //create the subject
    let subj1 = new Subject();
    // let subj1 = new ReplaySubject(4);


    //Subscribe one subscriber.
    subj1.subscribe({
      next:(v)=>console.log("Subscribetr A , val = ", v)
    });

    //define interval that doing next. each 3 seconds
    let counter = 0;
    let interval1 = setInterval(()=>{
      subj1.next(counter++)
    }, 3000);

    //set timeout that subscribe another subscriber  after 10 seconds.
    setTimeout(
      ()=>{
        console.log("Subscribing to the subject the new subscriber");
        subj1.subscribe({
          next:(v)=>console.log("Subscribetr B , val = ", v)
        })
      }, 10000);

    //see how much values the new subscriber get when it's start the action.

    //stop all after 20 seconds (for debug and understand easily
    setTimeout(
      ()=>{
        subj1.unsubscribe();
        clearInterval(interval1);
        console.log("Interval stopped... ");
      },20000
    );
  }

  do6WithReplaySubject(){
    console.log("Replay Subject demo ")
    //create the subject
    let subj1 = new ReplaySubject(4);

    //Subscribe one subscriber.
    subj1.subscribe({
      next:(v)=>console.log("Subscribetr A , val = ", v)
    });

    //define interval that doing next. each 3 seconds
    let counter = 0;
    let interval1 = setInterval(()=>{
      subj1.next(counter++)
    }, 3000);

    //set timeout that subscribe another subscriber  after 10 seconds.
    setTimeout(
      ()=>{
        console.log("Subscribing to the subject the new subscriber");
        subj1.subscribe({
          next:(v)=>console.log("Subscribetr B , val = ", v)
        })
      }, 10000);

    //see how much values the new subscriber get when it's start the action.

    //stop all after 20 seconds (for debug and understand easily
    let interval2;
    let subj2 = new ReplaySubject(4, 2000);

    setTimeout(
      ()=>{
        subj1.unsubscribe();
        clearInterval(interval1)
        console.log("Now See if U define a 'time window' that will exclude the values that outside of that " +
          "\nHere I 'll do the replaySubject with 4 values, in last 2 second. it's emit value each 0.7 so in 2 second u have only 2So it won't show all. " );
        let counter2 = 100;
        interval2 = setInterval(()=>{
          subj2.next(counter2++)
        }, 700);
      },20000
    );



    //Subscribe one subscriber.
    subj2.subscribe({
      next:(v)=>console.log("Subscribetr A to subj2  , val = ", v)
    });


    setTimeout(
      ()=>{
        subj2.subscribe({
          next:(v)=>console.log("Subscribetr B to subj2  , val = ", v)
        });
      }, 25000
    );

    //stop all after 20 seconds (for debug and understand easily
    setTimeout(
      ()=>{
        console.log("Stop interval 2");
        clearInterval(interval2)
        subj1.unsubscribe();
      },40000
    );




  }




  do7WithSubjectParam(subj1: Subject<any>){
    //create the subject
    // let subj1 = new Subject();
    console.log("By params - do7WithSubjectParam, typeof subject ? ", ( subj1.constructor.name))
    //Subscribe one subscriber.
    subj1.subscribe({
      next:(v)=>console.log("Subscribetr A , val = ", v)
    });

    //define interval that doing next. each 3 seconds
    let counter = 0;
    let interval1  = setInterval(()=>{
      subj1.next(counter++)
    }, 3000);

    //set timeout that subscribe another subscriber  after 10 seconds.
    setTimeout(
      ()=>{
        console.log("Subscribing to the subject the new subscriber");
        subj1.subscribe({
          next:(v)=>console.log("Subscribetr B , val = ", v)
        })
      }, 10000);

    //see how much values the new subscriber get when it's start the action.

    //stop all after 20 seconds (for debug and understand easily
    setTimeout(
      ()=>{
        clearInterval(interval1);
        subj1.complete();
        subj1.unsubscribe();
        console.log("Interval stopped... ");
      },20000
    );
  }

  do8WithAsyncSubject(){
    console.log("Async Subject demo ")
    //create the subject
    let subj1 = new AsyncSubject();

    //Subscribe one subscriber.
    subj1.subscribe({
      next:(v)=>console.log("Subscribetr A , val = ", v)
    });

    //define interval that doing next. each 3 seconds
    let counter = 0;
    let interval1 = setInterval(()=>{
      subj1.next(counter++)
    }, 3000);

    //set timeout that subscribe another subscriber  after 10 seconds.
    setTimeout(
      ()=>{
        console.log("Subscribing to the subject the new subscriber");
        subj1.subscribe({
          next:(v)=>console.log("Subscribetr B , val = ", v)
        })
      }, 10000);

    //see how much values the new subscriber get when it's start the action.

    //stop all after 20 seconds (for debug and understand easily
    let interval2;
    let subj2 = new ReplaySubject(4, 2000);

    setTimeout(
      ()=>{
        subj1.unsubscribe();
        clearInterval(interval1);
      },20000
    );
  }


  doExampleForTest(){
    //create the subject
    let subj1 = new Subject();

    //Subscribe one subscriber.
    subj1.subscribe({
      next:(v)=>console.log("Subscribetr A , val = ", v)
    });

    //define interval that doing next. each 3 seconds
    let counter = 0;
    let interval1 = setInterval(()=>{
      subj1.next(counter++)
    }, 3000);

    //set timeout that subscribe another subscriber  after 10 seconds.
    setTimeout(
      ()=>{
        console.log("Subscribing to the subject the new subscriber");
        subj1.subscribe({
          next:(v)=>console.log("Subscribetr B , val = ", v)
        })
      }, 10000);

    //see how much values the new subscriber get when it's start the action.

    //stop all after 20 seconds (for debug and understand easily
    setTimeout(
      ()=>{
        clearInterval(interval1);
        subj1.unsubscribe();
      },20000
    );
  }

  doDraftiTries(){
    let intervalTo = new Observable<true>();
    console.log("Wrapping subject in observable");
    let obs1 = interval(3000).pipe(
    );
    let subj1 = new Subject();
   let subscription1 =  obs1.subscribe(subj1);
    subj1.subscribe({
      next:((v)=>{
        console.log("Subscriber A ", v);
      })
    })
    subj1.subscribe({
      next:((v)=>{
        console.log("Subscriber B ", v);
      })
    })
    setTimeout(()=>{

      console.log("Stopping action");
      subscription1.unsubscribe();
    },
      10000)
  }




  func1(val){
    console.log("FUNC #1 - Doing something with value - " ,val);
  }

  func2(val){
    console.log("FUNC #2 - Doing something with value - " ,val);
  }

}
