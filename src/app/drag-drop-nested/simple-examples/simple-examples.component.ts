import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-examples',
  templateUrl: './simple-examples.component.html',
  styleUrls: ['./simple-examples.component.css']
})
export class SimpleExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onDrop1(ev: any){
    console.log("Dropped : ", ev);
  }

}
