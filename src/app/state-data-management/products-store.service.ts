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
    console.log("original data = ", productsMock)
    for (const [key, value] of Object.entries(productsMock)) {
      console.log(`${key}: ${value}`);
      this.localData.push({name: key, price: value});
    }

  }

  productsStore = new BehaviorSubject(this.localData);
  getProductsStore = this.productsStore.asObservable();

  setProductsStore(){
    console.log("setProductsStor")
    this.localData = this.localData.map(item =>{
      item.price =  this.getRandomInt(100);
      return item;
    });
    this.productsStore.next(this.localData);
  }

  startTimer2() {
    let invl = setInterval(() => {
      this.setProductsStore();
      setTimeout(()=>{
        clearInterval(invl);

      }, 30000)
    }, 3000);
  }

  addNewProduct(){
    this.localData.push({name: "wayne", price: 200});
  }

}
