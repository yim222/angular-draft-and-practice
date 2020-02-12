import { Component, OnInit } from '@angular/core';
import {ServiceAService} from '../service-a.service'
import {ServiceCService} from "../service-c.service";

@Component({
  selector: 'app-sub-component-a',
  templateUrl: './sub-component-a.component.html',
  styleUrls: ['./sub-component-a.component.css'],
  providers:  [ ServiceCService ]
})
export class SubComponentAComponent implements OnInit {

  constructor(private serviceA: ServiceAService,
              private serviceC: ServiceCService) { }

  ngOnInit() {

    // this.serviceC.serviceProp1 = "new sub-comp value";

    // this.serviceResult = this.serviceA.getLastResult();

    console.log("SubComponentAComponent , this.serviceC.serviceProp1 = ,  ", this.serviceC.serviceProp1);
  }

}
