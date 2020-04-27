import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i <=this.amount; i++){

      this.numbersArr.push(i);
    }
  }

  getValueFromChild(val){

    console.log("getValueFromChild, val?  ", val)
    this.lastClicked = val;
  }

}
