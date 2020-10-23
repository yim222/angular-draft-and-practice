import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";
import {debounce} from "rxjs/operators";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input('par1')
  amount: number;
  numbersArr: number[] = new Array();
  lastClicked: number = -1;
  lastClicked2: any = 5;

  secs1: number = 3;
  private show2ndField: boolean = true;

  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i <=this.amount; i++){

      this.numbersArr.push(i);
    }
  }

  toggle2ndField(){
    this.show2ndField = !this.show2ndField;
  }

  getValueFromChild(val){

    console.log("getValueFromChild, val?  ", val)
    this.lastClicked = val;
  }


  getPipedValueFromChild(val):Observable<any>{
    // return new Observable<any>().subscribe(value => {
    //
    // });
    console.log("getValueFromChild, val?  ", val)
    this.lastClicked = val;
    return null;
  }

  getLast3SecondClicked(event: EventEmitter<any>){

    console.log("getLast3SecondClicked ", event);
   let x =  event.pipe(debounce(()=> interval(3000)));
    x.subscribe(val =>{
      // this.lastClicked2.push(val);
      this.lastClicked2 = val;
    });

  }
}
