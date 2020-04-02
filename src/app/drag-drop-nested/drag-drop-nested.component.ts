import { Component, OnInit } from '@angular/core';
import {dataToUse} from "./nested-data";

@Component({
  selector: 'app-drag-drop-nested',
  templateUrl: './drag-drop-nested.component.html',
  styleUrls: ['./drag-drop-nested.component.css']
})
export class DragDropNestedComponent implements OnInit {
  providedData = dataToUse;
  constructor() { }

  ngOnInit(): void {
  }
  onDrop1(ev: any){
    console.log("Dropped : ", ev);
  }

}
