import { Component, OnInit } from '@angular/core';
import {a} from '../my-custom-config/readmeSrc/a';
// import * as Rx from 'rxjs/Rx';

// import {Rx} from 'rxjs';
// //npm install rxjs
import {interval} from 'rxjs';
import { fromEvent, Observable, of } from 'rxjs';

import {bufferCount, bufferWhen, delay, filter, scan, map} from "rxjs/operators";
// import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-learn-rx-js',
  templateUrl: './learn-rx-js.component.html',
  styleUrls: ['./learn-rx-js.component.css']
})
export class LearnRxJSComponent implements OnInit {

  private configVar = null;
  private testCondition = true;
  constructor() {

    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
    console.log('This is promise : ');

    const promise1 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('foo');
      }, 3000);
    });

    promise1.then(function(value) {
      console.log(value);
      // expected output: "foo"
    });

    console.log(promise1);
// expected output: [object Promise]
    const promise2 = new Promise (function(success1, failed) {

      setTimeout(function() {
        success1('new values of promsie ');
      }, 3500);
    });

    console.log('The values of promise2 = ', promise2.then(value => {console.log(value);}));

    function* iteratorFunc(someArr) {

      for (let i =0; i < someArr.leadingTriviaChars ; i++) {

        yield someArr[i] + ' from iterator func';
      }
    }

    let arr = ["Faith", "Hope", "Happy "];
    let check2 = iteratorFunc(arr);
    console.log(check2.next().value);
    console.log(check2.next().value);
    function* iteratorFunc2() {

      for (let i = 0 ; i <10 ;i++  ) {
        yield i + ' from iterator func';
      }
    }
    let check1  = iteratorFunc2();
    console.log("check = " , check1.next().value);
    console.log("check = " , check1.next().value);
    for (let i in arr) {

      console.log( arr[i] + ' from isnide func');
    }
    let arr2 = ["Izhar", "Yaakov", "Mashkif"];
    const observable2 = new Observable(subscriber => {
      subscriber.next("AVI");
      subscriber.next("IZI");
      subscriber.next("YAKI");
      // setTimeout(() => {
      //   subscriber.next(4);
      //   subscriber.complete();
      // }, 1000);
    }, );
    let round = 0;

    observable2.subscribe({
      next(x){
        console.log("round number " + ++round + " values = " + x);
      }
    });
    // observable2.subscribe({
    //   next("another name");
    // });
    let car = new Observable(writeWhatUwant => {
      console.log("The car is Volvo");
      writeWhatUwant.next(500);
    })
    car.subscribe(par => {
      console.log(par);
    })
  }

  ngOnInit() {
    this.configVar = a;
    fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
    document.addEventListener('click', () => console.log('Clicked 2!'));


    //here we do an event with vanilla JS
    const button = document.querySelector('.button1');
    const output = document.querySelector('.message1');

    button.addEventListener('click', e => {
      output.textContent = Math.random().toString(36).slice(2);
    });


    const output2 = document.querySelector('.message2');
    fromEvent(document.querySelector('.button2'), 'click').subscribe(() => output2.textContent = Math.random().toString(36).slice(2) + " observe! ");
    const button3 = document.querySelector('.button3');
    const output3 = document.querySelector('.message3');
    let counter = 0;
    button3.addEventListener('click', e => {
      counter++;
      if (counter % 3 !== 0) {
        return
      }
      output3.textContent = Math.random().toString(36).slice(2) + "Vanilla - just third ";
    });

    //with observable - only the third click

    const button4 = document.querySelector('.button4');
    const output4 = document.querySelector('.message4');
    // fromEvent(button4, 'click')bufferCount()
    //
    // Rx.Observable.fromEvent(button, 'click')
    //   .bufferCount(3)
    //   .subscribe((res) => {
    //     output.textContent = Math.random().toString(36).slice(2);
    //   });


    //bufferCount(3).
    fromEvent(button4, 'click').pipe(bufferCount(3))
    // <--------- only added this line!
      .subscribe(() => {
        output4.textContent = Math.random().toString(36).slice(2);
      });

    const nTimes = 5;
    const button5 = document.querySelector('.button5');
    const output5 = document.querySelector('.message5');
    document.getElementById('nTimes').innerHTML = nTimes + "";//it won't work - NO -it does work if U don't do TYPO!!! :))

    let observeableTrying = fromEvent(button5, "click");

    // observeableTrying.pipe(bufferWhen(observeableTrying.pipe(delay(400))) =>
    //    subscribe((res) => {
    //     output5.textContent = "I am changed";
    //   })
    // )
    const testme1 = document.getElementById("test-me1");
    const clicks2 = fromEvent(testme1, 'click');
    const date = new Date('March 15, 2050 12:00:00'); // in the future
    const delayedClicks = clicks2.pipe(delay(2000)); // click emitted only after that date
    delayedClicks.subscribe(x => console.log("x = ", x));

    /*Trying again */
    const click22 = fromEvent(button5, 'click');
    // click22.pipe(
    //   bufferWhen(() =>{
    //     filter(events => events.length >= 3).subscribe((res) =>{
    //       //   output5.textContent = Math.random().toString(36).slice(2);
    //   }
    // );

    const testme2 = document.getElementById("test-me2");
    //
    // // let count = 0;
    // // testme2.addEventListener('click', () => console.log(`Clicked ${++count} times`));
    fromEvent(testme2, 'click')
      .pipe(scan((count: any) => count + 1, 0))
      .subscribe(count => console.log(`Clicked ${count} times rexts observable`));
    const ob1 = fromEvent(document, 'click');


    console.log("Here is of mission : ");

    // explain 5#
    // I create like array that would be able to serve observable.
    const content = of("izhar", "idan", "yossef", "zion");

    // I am "subscribe" to that content another thing. At this example I make log action in eack iterate
    const subscribeTo = content.subscribe((myVal) => {
      //do something
      console.log("myVal = ", myVal);
    });

    // I am creating new content from the array by pipe (connect) map operation to the observable. What defined will be returned as new array of observable
    const a2 = content.pipe(map((myFriend) => {
      return `"Hi "  ${myFriend}`;
    }));

    // I am "subscribe" to that content another thing. At this example I make log action in eack iterate
    a2.subscribe(l => console.log(l));

    const button6 = document.querySelector('#test7');
    fromEvent(button6, 'click').subscribe(() => {
      console.log("button 6 clicked ");
    });


    // explanation #6
    //Here U can see how to pipe an N numbers of function to each other.
    let myJsPipe = (...manyFunctions) => {//take N function...
      return (value) => {// value is the other argument that will be passed.
        console.log("myJsPipe");
        return manyFunctions.reduce((a, b, inx) => {// in each iterate, U will tale one of the provided functionm and operate it on the accumalted value
          console.log("loop " + inx + "  b(a) = ? ", b(a), " value = ", value);
          console.log("a = ", a);
          console.log(b(a));
          return b(a);
        }, value);// provide the value for the initial loop
      }
    }

    //U can write the above cleaner

    let myJsPipe2 = (...functions) =>
      providedValue =>
        functions.reduce((lastValue, funcEl) => funcEl(lastValue), providedValue);

    let func1 = number => number + 1;
    let func2 = number => number * 2;
    let multipleIn10 = number => number * 10;
    console.log(myJsPipe(func1, func2, multipleIn10)(+2));
    console.log(func2(5));

    console.log(myJsPipe2(func1, func2, multipleIn10)(+7));


    //Interesting that U can create function and pass arguments with two brackets
    let func3 = (a, b) => {
      console.log("a = ", a, "b = ", b);
      return (innerPar) => {
        console.log("innerPar = ", innerPar)
      };
    }
    func3("bbb", "RRr")("ppp");//U can do it when U are passing another function inside.


    //Map with debugger
    const source1 = of("World of pipes", "lingar");
    // debugger;

    source1.pipe(map(x => {
        return `****\nHello ${x} \n***`;
      }
    )).subscribe(y => console.log(y));
    const observable2 = new Observable(subscriber => {
      subscriber.next("I am ");
      subscriber.next("A subscriber ");
      subscriber.next("Now if U will subscribe to this ");
      subscriber.next("U will get that.");
    });

    observable2.subscribe((x)=>console.log("show the value on the subscribe :", x))


    const source2 = of("apple", "Banana", "Tapuz");
    // debugger;
    console.log("see here how I pass some maps (each get the previous value of the function ");
    source2.pipe(
      map(x =>{
        // debugger;
        return x + " after first map\n ";
      }),
      map(x => `${x} and after second  \n`),
      map(y => `${y} and after third \n`)
    )
      .subscribe(
        y => console.log(y)
      );
    source2.subscribe(subscriber => {
      console.log("subscriber = ", subscriber);
    });

    let source3 = of (1000, 30 , 50 );      debugger;

    source3.pipe(
      map(x => x *3),
      filter (x => x > 120)
    )
      .subscribe(subscriber => console.log("now = ", subscriber , "and is greater then 120 "));
    let intervalTime = 2500;
    source3.subscribe(do1 =>
    setTimeout(()=> {console.log("hi new value " , do1)
      intervalTime += 2500;}, intervalTime));
  }

  ngAfterViewChecked(){

  }






}
