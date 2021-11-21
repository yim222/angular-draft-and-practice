import {Component, Input, OnInit} from '@angular/core';

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
export class ProductStoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    if (this.originalData) {
      this.dataToArray();
      this.startTimer();
    };
  }

  @Input()
  originalData: any;

  localData: any;
  interval;

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
      this.localData = this.localData.map(item =>{
        item.price =  this.getRandomInt(100);
        return item;
      })
      console.log("interval");
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
