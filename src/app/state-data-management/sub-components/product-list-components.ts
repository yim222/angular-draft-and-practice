import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-store',
  template: `
    <div>
      <h2>Here goes the products store</h2>
    </div>
  `,
  styleUrls: []
})
export class ProductStoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  data: any;
  view = `
<div *ngFor="item of data; index as i" key = "i">

<span>{item.name}</span> <span>{item.price}</span>

</div>
`

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
