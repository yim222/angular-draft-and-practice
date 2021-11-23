import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {productsMock} from "./products-mock";
import {ProductsStoreService} from "../products-store.service";

@Component({
  selector: 'app-products-store',
  template: `
    <div>
      <!-- Won't work     {{view}}/-->
      <h2>Here goes the products store</h2>
      <div *ngIf="localData; else elseBlock;">

        <div *ngFor="let item of localData; index as i" key="i">

          <span>{{item.name}}</span> = <span>{{item.price}}</span>

        </div>
      </div>
      <ng-template #elseBlock>Content is null.</ng-template>

    </div>
  `,
  styleUrls: []
})
export class ProductStoreComponent implements OnInit, OnChanges {
  constructor(private dataService: ProductsStoreService) {

  }

  ngOnInit(): void {
    if (this.originalData) {

      this.dataToArray();
      this.startTimer();
      this.startTimer2();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("local data = ", this.localData, "subject = ", this.productsStore1);

  }

  ngDoCheck() {
    console.log("do change")
    console.log("local data = ", this.localData, "subject = ", this.productsStore1.next(this.localData));

  }


  @Input()
  originalData: any;

  localData: any;
  interval;
  productsStore1: Subject<any> = new Subject<any>();


  /**It won't work like this in Angular (unlike React). You should handle all the html from the template only. */
  // view = <h1>Hi</h1>;
//   view2 = `
// <div *ngFor="item of data; index as i" key = "i">
//
// <span>{item.name}</span> <span>{item.price}</span>
//
// </div>
// `


  dataToArray() {
    this.localData = [];
    // this.data = [];
    console.log("original data = ", this.originalData)
    for (const [key, value] of Object.entries(this.originalData)) {
      console.log(`${key}: ${value}`);
      this.localData.push({name: key, price: value});
    }

  }

  startTimer() {
    this.interval = setInterval(() => {
      // this.localData = this.localData.map(item => {
      //   item.price = this.getRandomInt(100);
      //   return item;
      // })
      this.dataService.productsStore2.subscribe(data => {
        this.localData = data;
      });
      console.log("interval");
    }, 3000);
  }

  //  productsStore = new Subject<any>();
  //todo here - timer 2 that the subject take the values and changes them

  startTimer2() {
    this.interval = setInterval(() => {
      // this.localData = this.localData.map(item =>{
      //   item.price =  this.getRandomInt(100);
      //   return item;
      // })

      this.dataService.productsStore2.subscribe(data => {
        console.log("Observable data from product list= ", data)
      })
      console.log("interval2");
    }, 3000);
  }


  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

/*

export class ProductsList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let view = this.props.data.map((item, idx) => {
            return (<div key={idx}><span>{item.name}</span> <span>{item.price}</span></div>);

        });

        return (<div className="products-list">

            <h1>Products list</h1>
            {view}


        </div>);
    }

}

 */

@Component({
  selector: 'app-products-demo1',
  template: `
    <div>
      <!-- Won't work     {{view}}/-->
      <h2>Demo1</h2>
      <div *ngIf="localData; else elseBlock;">

        <div *ngFor="let item of localData; index as i" key="i">

          <span>{{item.name}}</span> = <span>{{item.price}}</span>

        </div>
      </div>
      <ng-template #elseBlock>Content is null.</ng-template>

    </div>
  `,
  styleUrls: []
})
export class ProductsDemo1Component implements OnInit {
  constructor(private dataService: ProductsStoreService) {
  }

  @Input()
  localData;

  ngOnInit(): void {
    this.dataService.productsStore2.subscribe(data => {
      this.localData = data;
    });
    // this.startTimer();

  }

  startTimer() {
    let interval = setInterval(() => {
      // this.localData = this.localData.map(item => {
      //   item.price = this.getRandomInt(100);
      //   return item;
      // })
      // this.dataService.productsStore2.subscribe(data => {
      //   this.localData = data;
      // });
      console.log("interval");
    }, 3000);
  }

}


@Component({
  selector: 'app-products-demo2',
  template: `
    <div>
      <!-- Won't work     {{view}}/-->
      <h2>Demo2</h2>
      <div *ngIf="localData; else elseBlock;">

        <div *ngFor="let item of localData; index as i" key="i">

          <span>{{item.name}}</span> = <span>{{item.price}}</span>

        </div>
      </div>
      <ng-template #elseBlock>Content is null.</ng-template>

    </div>
  `,
  styleUrls: []
})
export class ProductsDemo2Component implements OnInit {
  constructor(private dataService: ProductsStoreService) {
  }

  ngOnInit(): void {
    this.startTimer();
  }

  @Input()
  localData;


  /**Functions**/
  startTimer() {
    let interval = setInterval(() => {
      // this.localData = this.localData.map(item => {
      //   item.price = this.getRandomInt(100);
      //   return item;
      // })
      this.dataService.productsStore2.subscribe(data => {
        this.localData = data;
      });
      console.log("interval");
    }, 3000);
  }

}
