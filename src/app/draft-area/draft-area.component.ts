import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Ser1Service} from "./ser1.service";
import axios from 'axios';
import set = Reflect.set;
import {FormControl} from "@angular/forms";
import {interval, Observable, Subject} from "rxjs";
//TODO - gitting.
@Component({
  selector: 'app-draft-area',
  templateUrl: './draft-area.component.html',
  styleUrls: ['./draft-area.component.css']
})
export class DraftAreaComponent implements OnInit , AfterViewChecked, AfterViewInit {

  inputControl = new FormControl();
  inputSimpleControl ='';
  private values3: string;
  myObj = {
    a:{a2: "innterObj"}
  }

  myProps =    {
    promotion_type: {
      Combo: "my-combo", Poster: "PromotionApp Poster!"
    }
    ,
    rest_type: {
      Combo: "my-combo2313213", Poster: "PromotionApp asdasdadssa!", specialPrice: "Special Price"
    }
  };
  mySubject = new Subject();

  myObservable = new Observable(subscriber => {
    console.log("Hi, observable has created  ");
  });
  myObservable2 = interval(5000);
  constructor(private s: Ser1Service) { }
  //http://10.28.76.130:80/xpedient/kitchen/orderSubmission

  inputValue1: string = "Default value";
  value = '';
  value2 = "p";
  onEnter(value: string) { this.value = value; }

  onChange1(ev: any){
    console.log("Event = " , ev);
    this.value2 = ev;

    console.log("value = " , ev.returnValue)
  }

  onKey(event: KeyboardEvent) { // without type info
    console.log(typeof event)
    console.log( event)

    this.values3 += event.key + ' | ';
  }
  
  
  /******************************************/


  ngOnInit() {
    this.s.changeX();
    let str:string = 'promotion_type';
    console.log(this.myProps)
    console.log("Object...s" , this.myObj['a']);

    console.log("Object...s??? " , this.myProps['promotion_type']);

    console.log("Object...s!!! " , this.myProps[str]);

    console.log("trying to extract number from this string : \n" +
      "XpedientOrderGateway.ItemNotFoundException: Butter Finger (Missing item #012000061462)\\r\\n   at XpedientOrderGateway.OrderAnnouncement.a(ToppingLine A_0, Boolean A_1)\\r\\n   at XpedientOrderGateway.OrderAnnouncement.a(String A_0, OfferingLine[] A_1, OrderIssueDescription[]& A_2, OrderIssueDescription[]& A_3)")
    //indexOf("string" ) - found the firs t search("xxx") - also.
    //Compare - https://stackoverflow.com/a/55794266/9727918
    //Think that indexOf is better for me ? maybe but don't sure.
    //Myabe better to found the name directly ?
    let rejectMsg = "XpedientOrderGateway.ItemNotFoundException: Butter Finger (Missing item #012000061462)\\r\\n   at XpedientOrderGateway.OrderAnnouncement.a(ToppingLine A_0, Boolean A_1)\\r\\n   " +
      "at XpedientOrderGateway.OrderAnnouncement.a(String A_0, OfferingLine[] A_1, OrderIssueDescription[]& A_2, OrderIssueDescription[]& A_3)";
    let startIdx = rejectMsg.indexOf(':')+1;
    let endIdx = rejectMsg.indexOf('(') - 1;


    console.log("startIdx = " + startIdx + " endIdx = " + endIdx);
    let itemName = rejectMsg.substring(startIdx,endIdx);
    console.log("item name = " + itemName);



    //simple mission

    this.mySubject.subscribe(()=>console.log("subscriber1"));
    this.mySubject.subscribe(()=>console.log("subscriber2"));
    this.myObservable.subscribe(this.mySubject);
    // this.myObservable2.subscribe(this.mySubject);









  }
  //one time  after all uploaded
  ngAfterViewInit(){

  }

  ngAfterViewChecked(){

  }

  startObservable(){

    this.mySubject.next();

      this.myObservable.subscribe(
      subscriber => {
        console.log("Hi, observable has triggered ");
      }
    )

  }


}//end of the class


