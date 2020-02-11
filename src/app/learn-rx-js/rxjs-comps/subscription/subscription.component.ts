import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})


export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log("Subscription - the simple subscribe \n" +
      "It's a functionality that each time the observable (like event ) happen - It's happen. " +
      "This is called 'subscription' And U can 'unsubscribe' at the next . " +
      "In general - the use of that is for subscribe to an event that happen. And Unsubscribe when the case is to leave it. "
    );

    let time1 = 5;

    let time2 = 8;


    let stopTime = 20;

    let stopTime2 = 30;


    let obs1 = interval(time1 * 1000);

    let subscription1 = obs1.subscribe(val =>
      console.log("I happen when obs1 is happen each " + time1  + " seconds. value = " + val
      + "  \nI will stop after " + stopTime + " seconds ")
    );

    let obs2 = interval(time2 * 1000);

    let subscription2 = obs2.subscribe(val =>
      console.log("subscribe2 - See here how I am stopping together with subscribe2_2 ! val = " + val
        + "  \nI will stop after " + stopTime2 + " seconds ")
    );

    let subscription2_2 = obs2.subscribe(val =>
      console.log("subscribe2_2 - See here how I am stopping together with subscribe2. Inside u have option to remove me, U can see the code and uncomment. ! val = " + val
        + "  \nI will stop after " + stopTime2 + " seconds ")
    );

    //here I wrap together sub2-2 inside 2 for the unsubscribe will affect both
    subscription2.add(subscription2_2);

    // subscription2.remove(subscription2_2);//this for remove the child subscription




    setTimeout(()=> {
      console.log("Now I am unsubscribe");
      subscription1.unsubscribe()
    }    , stopTime * 1000
    );

    setTimeout(()=> {
      console.log("Now sub2 and sub2-2 will  unsubscribe (in one unsuscribe ");
      subscription2.unsubscribe()
    }    , stopTime2 * 1000
    );





  }

}
