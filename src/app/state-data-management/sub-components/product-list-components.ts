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
        <button (click)="dataService.addNewProduct()">Add product demo</button>

      </div>
      <ng-template #elseBlock>Content is null.</ng-template>

    </div>
  `,
  styleUrls: []
})
/**
 * See how all you have to do is to assign your local field to the store.
 */
export class ProductStoreComponent implements OnInit, OnChanges {
  constructor(private dataService: ProductsStoreService) {

  }
  /**Fields**/
  localData: any;

  /**Functions**/
  ngOnInit(): void {
    this.dataService.productsStore.subscribe(data => {
      this.localData = data;
    });
  }

  ngOnChanges(changes: SimpleChanges) {

  }
  ngDoCheck() {
  }


  /**It won't work like this in Angular (unlike React). You should handle all the html from the template only. */
  // view = <h1>Hi</h1>;
//   view2 = `
// <div *ngFor="item of data; index as i" key = "i">
//
// <span>{item.name}</span> <span>{item.price}</span>
//
// </div>
// `

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
    this.dataService.productsStore.subscribe(data => {
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
      this.dataService.productsStore.subscribe(data => {
        this.localData = data;
      });
      console.log("interval");
    }, 3000);
  }

}
