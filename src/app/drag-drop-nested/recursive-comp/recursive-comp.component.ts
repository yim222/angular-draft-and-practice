import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recursive-comp',
  templateUrl: './recursive-comp.component.html',
  styleUrls: ['./recursive-comp.component.css']
})
export class RecursiveCompComponent implements OnInit {

  @Input()
  data: any = {text : "some text ", subText: []};
  @Input()
  dataArr:[];
  constructor() { }

  ngOnInit(): void {
    console.log("data arr = " , this.dataArr);
  }
  onDrop1(ev: any){
    console.log("Dropped : ", ev);
  }

}
