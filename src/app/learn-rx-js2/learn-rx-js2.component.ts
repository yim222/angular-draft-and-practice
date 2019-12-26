import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-learn-rx-js2',
  templateUrl: './learn-rx-js2.component.html',
  styleUrls: ['./learn-rx-js2.component.css']
})
export class LearnRxJs2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    const observable = new Observable(function subscribe(subscriber) {
      // Keep track of the interval resource
      const intervalId = setInterval(() => {
        subscriber.next('hi');
      }, 1000);
    });

    let do2 = observable.subscribe((x)=>
    console.log("x ? = ", x));

    setTimeout(()=>{
      do2.unsubscribe()
    }, 7000);

    //define custom unsubscribe
    const observable2 = new Observable(function subscribe2(subscriber) {
      // Keep track of the interval resource
      const intervalId2 = setInterval(() => {
        subscriber.next('hi Obserable 2');
      }, 1000);
      return function unsubscribe(){
        console.log("I am custom unsubscribe.... will - Here I can define more action that will be done when unsubscribing.  ");
        // setTimeout(()=>{
        //   clearInterval(intervalId2)
        //
        // }, 3000);
      }
    });

    let do3 = observable2.subscribe((y)=>
      console.log("y ? = ", y));

    setTimeout(()=>{
      do3.unsubscribe()
    }, 10000);


    let doSomethingPure = () =>{
     const pp =  setInterval(()=>{
        console.log("Pure JS")
      }, 2000);
      return function stop(){
        console.log("I am returning and this is NOT Stop, without further action for stoppping.");
        clearInterval(pp);
      }
    }

    let amm1 = doSomethingPure();
    setInterval(()=>{
      amm1();
    }, 7000);


  }


}
