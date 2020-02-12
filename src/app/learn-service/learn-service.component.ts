import { Component, OnInit } from '@angular/core';
import {ServiceAService} from './service-a.service';
import {ServiceCService} from "./service-c.service";

@Component({
  selector: 'app-learn-service',
  templateUrl: './learn-service.component.html',
  styleUrls: ['./learn-service.component.css'],
  providers:  [ ServiceCService ]

})
export class LearnServiceComponent implements OnInit {

  private x: number = 2 ;
  private y: number = 3;
  private serviceResult = 0;

  constructor(private serviceA: ServiceAService, private serviceC: ServiceCService
    // ,private serviceC: ServiceCService // uncomment it for seeing how it's not working.
  ) { }


  onChange (event: any){
    this.x = +event.target.value;
  }

  calcAndSave(){
    let result=  this.x + this.y
    this.serviceA.setLastResult(result);
  }


  ngOnInit() {

    this.serviceC.serviceProp1 = "new value";

    // this.serviceResult = this.serviceA.getLastResult();

    console.log("LearnServiceComponent , this.serviceC.serviceProp1 = ,  ", this.serviceC.serviceProp1);
  }

}
