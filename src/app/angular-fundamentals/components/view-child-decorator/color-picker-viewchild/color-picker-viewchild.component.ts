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

  primary = '#1976d2';
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
    // this.primaryInput.openDialog();//Won't work since it's not recognize the inside property
  }

  constructor() { }

  ngOnInit(): void {

  }

}
