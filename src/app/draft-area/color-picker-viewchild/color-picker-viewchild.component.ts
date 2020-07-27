import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ColorSampleComponent} from "../color-sample/color-sample.component";
import {ColorPickerDirective} from "ngx-color-picker";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'their-example',
  templateUrl: './color-picker-viewchild.component.html',
  styleUrls: ['./color-picker-viewchild.component.css']
})
export class ColorPickerViewchildComponent implements OnInit, AfterViewInit {
  @ViewChild('regJsAccess', {read: ElementRef})//actually U can work with any and it will work too.
  regJsAccess2:ElementRef;
  primary = '#1976d2';
  showMe = "nothing";

  @ViewChild('localHtml1')
  localHtml1: ElementRef;

  @ViewChild('localHtml2', {static: true})
  localHtml2: ElementRef;

  @ViewChild('primaryColorSample')
  primarySampleComponent: ColorSampleComponent;

  @ViewChild('primaryColorSample', {read: ElementRef})
  primarySampleDiv: ElementRef;

  @ViewChild('primaryInput')
  primaryInput: ElementRef;

  @ViewChild('primaryInput', {read:ColorPickerDirective})
  colorPickerDirective: ColorPickerDirective;

  @ViewChild(MatIcon)
  matIcon: MatIcon;

  ngAfterViewInit() {
    console.log("Element before listener added - " , this.localHtml1);
    console.log('Values on ngAfterViewInit():');

    console.log("primaryColorSample:", this.primarySampleComponent);

    console.log("primarySampleDiv:", this.primarySampleDiv);

    console.log("primaryInput:", this.primaryInput);

    console.log("matIcon:", this.matIcon);

    // this.localHtml1.nativeElement.addEventListener("click", this.jsFunc());
    // document.getElementById("localHtml1").addEventListener("click", this.jsFunc);
    console.log("Element after listener added - " , this.localHtml1);

    // this.localHtml1.nativeElement.querySelector('localClass1')
    //   .addEventListener('click',  this.jsFunc);
    this.localHtml1.nativeElement.addEventListener('click',  this.jsFunc);

    console.log("Testing with static true :  - " , this.localHtml2.nativeElement.innerHtml);





  }

  jsFunc(event){
    alert("Js function");
  }


  openColorPicker() {
    // this.colorPickerDirective.openDialog();
    // this.primaryInput.openDialog();//WOn't work since it's not recognize the inside property
  }

  constructor() { }

  ngOnInit(): void {

    let ivl =  setInterval(()=>{
      console.log("regJsAccess = ", this.regJsAccess2,  "value = ", this.regJsAccess2.nativeElement.innerHTML);
      console.log("Testing with static true - after changes :  - " , this.localHtml2.nativeElement.innerHTML);


      this.showMe =  this.regJsAccess2.nativeElement.innerHTML;
    }, 2000);

    setTimeout(()=>{
      console.log("Change the value of regJS  = ");
      document.getElementById('regJs').innerHTML = "after change";

      document.getElementById('localHtml2Id').innerHTML = "after change again ";


    }, 3000);

    setTimeout(()=>{
      console.log("sht down the interval - DOES working ");
      window.clearInterval(ivl);
    }, 10000);
  }

}
