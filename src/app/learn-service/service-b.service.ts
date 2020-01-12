import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBService {

  constructor() { }

  testServiceB():string{
   return "I am service B function";
  }
}
