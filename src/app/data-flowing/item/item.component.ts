import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {bufferCount} from "rxjs/operators";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('itemPar')
  number;

  @Output()
  parentConnections = new EventEmitter();

  @Output()
  parentConnections3 = new EventEmitter();

  clicked:any = 0;
  constructor() { }


  connectParent(){
    console.log("Connecting parent")
    this.parentConnections.emit(this.number);
  }

  connectParent2(){
    this.parentConnections.pipe(bufferCount(3)).subscribe(val=>{
      this.clicked = val;
    })
    // <--------- only added this line!
  }
  connectParent3(){
    this.parentConnections3.emit(this.parentConnections);
  }

  connectParentError(){
    console.log("Showing error on parent")
    this.parentConnections.emit(undefined);
  }

  ngOnInit(): void {

    this.parentConnections.subscribe((val)=>{
      console.log("I make it happen ? ", val);
    })
  }


}
