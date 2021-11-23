import { Component, OnInit } from '@angular/core';
import {productsMock} from "../../products-mock";
import {ProductsStoreService} from "../../../products-store.service";

@Component({
  selector: 'app-main-with-rxjs',
  templateUrl: './main-with-rxjs.component.html',
  styleUrls: ['./main-with-rxjs.component.css']
})
export class MainWithRxjsComponent implements OnInit {

  constructor(private dataService: ProductsStoreService) { }
  productsMockLocal: any ;//= productsMock;
  ngOnInit(): void {
    this.productsMockLocal = productsMock;
    console.log("productsMockLocal = ", this.productsMockLocal);
    this.startTimer2();

  }
  startTimer2() {
    setInterval(() => {
      // this.localData = this.localData.map(item =>{
      //   item.price =  this.getRandomInt(100);
      //   return item;
      // })

      this.dataService.productsStore2.subscribe(data=>{
        console.log("Observable data from main with rxjs= ", data)
      })
      console.log("interval2");
    }, 3000);
  }
}
