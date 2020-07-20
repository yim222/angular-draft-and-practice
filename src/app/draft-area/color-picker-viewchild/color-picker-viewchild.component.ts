import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ColorSampleComponent} from "../color-sample/color-sample.component";
import {ColorPickerDirective} from "ngx-color-picker";

@Component({
  selector: 'their-example',
  templateUrl: './color-picker-viewchild.component.html',
  styleUrls: ['./color-picker-viewchild.component.css']
})
export class ColorPickerViewchildComponent implements OnInit {

  primary = '#1976d2';


  @ViewChild('primaryColorSample')
  primarySampleComponent: ColorSampleComponent;

  @ViewChild('primaryColorSample', {read: ElementRef})
  primarySampleDiv: ElementRef;

  @ViewChild('primaryInput')
  primaryInput: ElementRef;

  @ViewChild('primaryInput', {read:ColorPickerDirective})
  colorPickerDirective: ColorPickerDirective;

  ngAfterViewInit() {

    console.log('Values on ngAfterViewInit():');

    console.log("primaryColorSample:", this.primarySampleComponent);

    console.log("primarySampleDiv:", this.primarySampleDiv);

    console.log("primaryInput:", this.primaryInput);

  }

  openColorPicker() {
    this.colorPickerDirective.openDialog();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
