import { Injectable } from '@angular/core';
import {productsMock} from "./sub-components/products-mock";
import {BehaviorSubject, interval, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {

  constructor() {
    this.dataToArray();

    this.startTimer2();
    // this.globalData.s

  }
  localData = [];


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  dataToArray() {
    // this.localData = [];
    // this.data = [];
    console.log("original data = ", productsMock)
    for (const [key, value] of Object.entries(productsMock)) {
      console.log(`${key}: ${value}`);
      this.localData.push({name: key, price: value});
    }

  }

  productsStore2 = new BehaviorSubject(this.localData);
  getProductsStore2 = this.productsStore2.asObservable();

  setProdcutsStore2(){
    console.log("setProductsStor")
    this.localData = this.localData.map(item =>{
      item.price =  this.getRandomInt(100);
      return item;
    });
    this.productsStore2.next(this.localData);
  }

  startTimer2() {
    let invl = setInterval(() => {
      this.setProdcutsStore2();
      setTimeout(()=>{
        clearInterval(invl);

      }, 30000)
    }, 2000);

  }

}
