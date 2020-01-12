import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Ser1Service} from "./ser1.service";
import axios from 'axios';
import set = Reflect.set;
//TODO - gitting.
@Component({
  selector: 'app-draft-area',
  templateUrl: './draft-area.component.html',
  styleUrls: ['./draft-area.component.css']
})
export class DraftAreaComponent implements OnInit , AfterViewChecked, AfterViewInit {

  constructor(private s: Ser1Service) { }
  //http://10.28.76.130:80/xpedient/kitchen/orderSubmission

  ngOnInit() {
    this.s.changeX();



  }
  //one time  after all uploaded
  ngAfterViewInit(){

  }

  ngAfterViewChecked(){

  }



}//end of the class
