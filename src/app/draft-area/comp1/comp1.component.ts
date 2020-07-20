import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

   @ViewChild(HTMLElement)
   pel: HTMLElement ;
  myVar = "nothings";
  @Input()
  x ;

  @Input()
  y =3;
  constructor() { }

  ngOnInit(): void {
  }
  changeY(){
    this.y = 100;
  }
  test(par){
    console.log("test ");
    console.log("par = ", par);
    console.log("par trying  = ", par.tagName);
    this.myVar = this.pel.tagName;


  }



}
