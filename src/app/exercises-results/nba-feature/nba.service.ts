import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(private http: HttpClient) {
    console.log("NbaService here");

  }
  test():void{
    console.log("Test NBA Service ");
  }
  getData1(): Observable<any>{
    return this.http.get<any>('https://www.balldontlie.io/api/v1/games')
      .pipe(
        tap(_ => console.log('fetched games'))
      );
      // .subscribe(value => {
      //   console.log("value = " , value);
      // })



  }
  /*

   //GET heroes from the server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }

*/
}
