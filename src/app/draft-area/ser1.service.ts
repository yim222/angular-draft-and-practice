import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class Ser1Service {
  public x = 3;
  constructor() { }

  changeX():Observable<any>{

    this.x += 5;
    return of('1');
  }

  doSomething(){
    return this.x + 5;
  }


}


