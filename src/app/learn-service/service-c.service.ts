import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ServiceCService {


  constructor() { }

  public serviceProp1 = "default value";

  testServiceC():string{
    return "I am service C function";
  }

}
