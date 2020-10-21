import { Component, OnInit } from '@angular/core';
import {interval, Observable, of} from "rxjs";
// import * as http from "http";
import {map, take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.scss']
})
export class AngularPipesComponent implements OnInit {
  currentDate = new Date();
  datePar1 =   "fullDate";
  short = true;
  observeable1  = interval(1000);
  observeable2: Observable<any>;
  arr = ['apple', 'Banana', 'Grape'];
  myLocale = "lin-he";
  dec1 = "1.2-5";
  dec2 = "0.3";
  object1 = {
    a: 'some a value',
    num: 5,
    arr: ["k", "l", "m", "o"]
  }
  object2: {[key: number]: string} = {2: 'foo', 1: 'bar'}
  object3 = {a: "ggg"};

  str1 = "0123456789";

  manydigits = 45.32883426982346;
  noDigits = 2;
  decimal = 0.6587;
  constructor(public http: HttpClient) {

  }



  ngOnInit(): void {

  }

  try1():void{
    this.observeable2=this.observeable1.pipe(
      map(number =>{
        return this.arr[number]
      }),
      take(this.arr.length)
    );



  }

  get x(){
    return 'x value';
  }

  get datePar2(){
    return this.short ? 'shortDate': 'fullDate';
  }
  toggleShort(){
    this.short = !this.short;
  }

  // get y(num){//U cannot with parameters
  //   if (num%2 === 0){
  //     return 'y even';
  //   }
  //   else {
  //     return 'y odd';
  //   }
  // }

}
