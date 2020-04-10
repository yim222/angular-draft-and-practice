import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recursive-comp2',
  templateUrl: './recursive-comp2.component.html',
  styleUrls: ['./recursive-comp2.component.css']
})
export class RecursiveComp2Component implements OnInit {

  id = 0;
  @Input()
  data: any = {text : "some text ", subText: []};
  @Input()
  dataArr:[];
  constructor() { }

  giveId(){
   return ++this.id;
  }
  getIds(){
    let x = 6;
    // let arr = [...Array(20)].fill(10)
  }

  ngOnInit(): void {
    console.log("data arr = " , this.dataArr);
    console.log("lingar test ", this.getIds());
  }
  onDrop1(ev: any){
    console.log("Dropped : ", ev);
  }

}
