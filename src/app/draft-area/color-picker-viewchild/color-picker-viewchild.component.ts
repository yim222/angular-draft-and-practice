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

    console.log('Values on ngAfterViewInit():');

    console.log("primaryColorSample:", this.primarySampleComponent);

    console.log("primarySampleDiv:", this.primarySampleDiv);

    console.log("primaryInput:", this.primaryInput);

    console.log("matIcon:", this.matIcon);


  }



  openColorPicker() {
    this.colorPickerDirective.openDialog();
  }

  constructor() { }

  ngOnInit(): void {

    let ivl =  setInterval(()=>{
      console.log("regJsAccess = ", this.regJsAccess2,  "value = ", this.regJsAccess2.nativeElement.innerHTML);
      this.showMe =  this.regJsAccess2.nativeElement.innerHTML;
    }, 2000);

    setTimeout(()=>{
      console.log("Change the value of regJS  = ");
      document.getElementById('regJs').innerHTML = "after change";

    }, 3000);

    setTimeout(()=>{
      console.log("sht down the interval - DOES working ");
      window.clearInterval(ivl);
    }, 10000);
  }

}
