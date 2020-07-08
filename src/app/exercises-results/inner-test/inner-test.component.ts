import { Component, OnInit } from '@angular/core';
import {NbaService} from "../nba-feature/nba.service";

@Component({
  selector: 'app-inner-test',
  templateUrl: './inner-test.component.html',
  styleUrls: ['./inner-test.component.css']
})
export class InnerTestComponent implements OnInit {
  var: any;
  constructor(public nbaService: NbaService) { }

  ngOnInit(): void {



  }
  doSomething(){
    this.nbaService.behavSubj.next("outer value... ");
  }

  outerFunc(val){

  }

}
