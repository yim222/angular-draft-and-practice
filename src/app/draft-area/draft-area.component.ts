import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import axios from 'axios';
import set = Reflect.set;
//TODO - gitting.
@Component({
  selector: 'app-draft-area',
  templateUrl: './draft-area.component.html',
  styleUrls: ['./draft-area.component.css']
})
export class DraftAreaComponent implements OnInit , AfterViewChecked, AfterViewInit {

  constructor() { }
  //http://10.28.76.130:80/xpedient/kitchen/orderSubmission

  ngOnInit() {




  }
  //one time  after all uploaded
  ngAfterViewInit(){

  }

  ngAfterViewChecked(){

  }



}//end of the class
