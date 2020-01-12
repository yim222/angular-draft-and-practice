import { Injectable } from '@angular/core';
import {ServiceBService} from "./service-b.service";

@Injectable({
  providedIn: 'root'
})
export class ServiceAService {

 private item =['a', 'b', 'c'];
 private lastResult = 0;

  constructor(private serviceB: ServiceBService) { }

  getLastResult(){
    return this.lastResult;
  }

  setLastResult(result){
    this.lastResult = result;
  }

  getServiceB():string{
    return this.serviceB.testServiceB() + " from service Ai";
  }
}
