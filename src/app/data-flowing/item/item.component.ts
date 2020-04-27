import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  constructor() { }


  connectParent(){
    console.log("Connecting parent")
    this.parentConnections.emit(this.number);
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
