import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-temp',
  templateUrl: './sub-temp.component.html',
  styleUrls: ['./sub-temp.component.css'],
  interpolation:['start###', 'end###']
})
export class SubTempComponent implements OnInit {

  constructor() { }

  prop1 = "lingar ";
  prop2 = "Value2 "

  ngOnInit() {
  }

}
