import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  constructor() { }

  public testServiceB():string{
   return "I am service B function";
  }
}
