import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Game1} from "./models";

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  url1: string = 'https://www.balldontlie.io/api/v1/games?per_page=50';
  totalPages: number;
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

  getData2(): Observable<any>{
    return this.http.get<any>(this.url1)
      .pipe(
        tap(_ => console.log('fetched games - getData2'))
        // ,        map(res=>this.totalPages = res.meta.total_pages)
      );



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
