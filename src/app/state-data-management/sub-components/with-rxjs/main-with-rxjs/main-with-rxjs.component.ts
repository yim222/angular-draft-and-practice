import { Component, OnInit } from '@angular/core';
import {productsMock} from "../../products-mock";

@Component({
  selector: 'app-main-with-rxjs',
  templateUrl: './main-with-rxjs.component.html',
  styleUrls: ['./main-with-rxjs.component.css']
})
export class MainWithRxjsComponent implements OnInit {

  constructor() { }
  productsMockLocal: any ;//= productsMock;
  ngOnInit(): void {
    this.productsMockLocal = productsMock;
    console.log("productsMockLocal = ", this.productsMockLocal)

  }

}
