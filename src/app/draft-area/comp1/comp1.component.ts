import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SimpleDrawSquareComponent} from "../../exercises-results/simple-draw-square/simple-draw-square.component";

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, AfterViewInit {

  @ViewChild('localHtml1')
  localHtml1: ElementRef;
   @ViewChild("pel")
   pel: ElementRef ;
  myVar = "nothings";
  myVar2 = "Myvar2"
  @Input()
  x ;

  @ViewChild(SimpleDrawSquareComponent)
  childComp: SimpleDrawSquareComponent;

  @ViewChild('childComp2')
  childComp2: SimpleDrawSquareComponent;

  @ViewChild('childComp3', {read: ElementRef})
  childComp3: ElementRef;

  @ViewChild(SimpleDrawSquareComponent)
  byType: SimpleDrawSquareComponent;

  @Input()
  y =3;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log("local pel? ", this.pel);
    console.log("viewChild = ", this.childComp);
    console.log("viewChild2 = ", this.childComp2);

    console.log("viewChild3 = ", this.childComp3);
    this.myVar2 = this.childComp3.nativeElement.tagName;



  }
  changeY(){
    this.y = 100;
  }
  test(par: ElementRef){
    console.log("test ");
    console.log("par = ", par);
    console.log("pel = ", this.pel);
    this.myVar = this.pel.nativeElement.innerHTML;

    console.log("byType = " , this.byType);


    // console.log("par trying  = ", par.nativeElement.tagName);
    // this.myVar = this.pel.nativeElement.tagName;


  }



}
