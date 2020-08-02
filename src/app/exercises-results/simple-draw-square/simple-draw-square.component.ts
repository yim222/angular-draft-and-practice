import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-draw-square',
  templateUrl: './simple-draw-square.component.html',
  styleUrls: ['./simple-draw-square.component.css']
})
export class SimpleDrawSquareComponent implements OnInit {
  x1 = "Initial value ";
  square: ElementRef;
  width = 50;
  height = 50;
  frameColor = "black";
  fillColor = "white";
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event){
    console.log("Event = ", event);
  }

}
