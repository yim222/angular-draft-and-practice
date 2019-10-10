import { Component, OnInit } from '@angular/core';
// import * as Rx from 'rxjs/Rx';

// import {Rx} from 'rxjs' npm install rxjs
import {interval} from 'rxjs';
import { fromEvent, Observable } from 'rxjs';

import {bufferCount, bufferWhen, delay, filter, scan} from "rxjs/operators";
// import * as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-learn-rx-js',
  templateUrl: './learn-rx-js.component.html',
  styleUrls: ['./learn-rx-js.component.css']
})
export class LearnRxJSComponent implements OnInit {

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
    fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
    document.addEventListener('click', () => console.log('Clicked 2!'));


    //here we do an event with vanilla JS
    const button = document.querySelector('.button1');
    const output = document.querySelector('.message1');

    button.addEventListener('click', e => {
      output.textContent = Math.random().toString(36).slice(2);
    });


    const output2 = document.querySelector('.message2');
    fromEvent(document.querySelector('.button2'), 'click').subscribe(() =>  output2.textContent = Math.random().toString(36).slice(2) + " observe! ");
    const button3 = document.querySelector('.button3');
    const output3 = document.querySelector('.message3');
    let counter = 0;
    button3.addEventListener('click', e => {
      counter ++;
      if (counter % 3 !== 0){return}
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
    document.getElementById('nTimes').innerHTML = nTimes+"";//it won't work - NO -it does work if U don't do TYPO!!! :))

    let observeableTrying = fromEvent(button5, "click");
    // observeableTrying.bufferWhen pipe(delay(nTime * 1000))
  /*
  const click$ = Rx.Observable.fromEvent(button, 'click');

click$
  .bufferWhen(() => click$.delay(400)) // <--------- during 400ms
  .filter(events => events.length >= 3) // <-------- 3 or more events
  .subscribe((res) => {
      output.textContent = Math.random().toString(36).slice(2);
  });
   */

  // observeableTrying.pipe(bufferWhen(() => {
  //     delay(333).filter(events => events.length >=3)
  //   }
  // )).subscribe((res) =>{
  //   output5.textContent = Math.random().toString(36).slice(2);
  // });
  //   observeableTrying.pipe(bufferWhen(() => {
    //     delay(333),filter (events => events.length >=3))}
    //   //   }));
    //
    // const clicks = fromEvent(document, 'click');
    // const buffered = clicks.pipe(bufferWhen(() =>
    //   interval(1000 + Math.random() * 4000)
    // ));
    // buffered.subscribe(x => console.log(x));
    const testme1 = document.getElementById("test-me1");
    const clicks2 = fromEvent(testme1, 'click');
    const date = new Date('March 15, 2050 12:00:00'); // in the future
    const delayedClicks = clicks2.pipe(delay(2000)); // click emitted only after that date
    delayedClicks.subscribe(x => console.log("x = " , x));

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
      .pipe(scan((count:any ) => count + 1, 0))
      .subscribe(count => console.log(`Clicked ${count} times rexts observable` ));
    const ob1 =    fromEvent(document, 'click');

  }







}
