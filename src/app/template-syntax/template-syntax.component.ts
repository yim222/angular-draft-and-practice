import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
  // interpolation: ["","e"]
})
export class TemplateSyntaxComponent implements OnInit {

  imgUrl1 = 'assets/images1/img1.jpg';
  num1 = 2;

  goglUrl = "https://www.google.com/";
  yahooUrl = "https://www.yahoo.com/";
  foods = ["Bread", "Egg", "Cheese"];
  constructor() { }

  ngOnInit() {
  }

}
