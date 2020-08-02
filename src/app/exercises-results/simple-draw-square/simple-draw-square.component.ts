import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-draw-square',
  templateUrl: './simple-draw-square.component.html',
  styleUrls: ['./simple-draw-square.component.css']
})
export class SimpleDrawSquareComponent implements OnInit {
  x1 = "Initial value ";
  constructor() { }

  ngOnInit(): void {
  }

}
