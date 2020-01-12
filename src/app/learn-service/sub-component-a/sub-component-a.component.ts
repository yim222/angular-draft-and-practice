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
  }

}
