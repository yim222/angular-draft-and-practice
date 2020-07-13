import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {InnerTestComponent} from "../inner-test/inner-test.component";
import {Game1} from "./models";

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  url1: string = 'https://www.balldontlie.io/api/v1/games?per_page=50';
  lastUrl: string = "";
  totalPages: number;
  subj1: Subject<any> = new Subject();
  getDataSubject : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  resetPagesNav: Subject<any> = new Subject<any>();


  constructor(private http: HttpClient) {
    console.log("NbaService here");

  }
  test():void{
    console.log("Test NBA Service ");
  }
  getData1(): Observable<any>{
    return this.http.get<any>('https://www.balldontlie.io/api/v1/games')
      .pipe(
        tap(_ => {
          console.log('fetched games', _)})
      );
      // .subscribe(value => {
      //   console.log("value = " , value);
      // })



  }

  getData2(): Observable<any>{
    return this.http.get<any>(this.url1)
      .pipe(
        tap(_ => {
          console.log('fetched games - getData2 = ', _);
          this.totalPages = _.meta.total_pages;
        })
        // ,        map(res=>this.totalPages = res.meta.total_pages)
      );



  }
  getData3ForSubject(postfix =''  ): Observable<any>{
    console.log("url = " , this.url1+postfix);
    // this.url1 += postfix;
    this.lastUrl = this.url1 + postfix;
    return this.http.get<any>(this.url1 + postfix)
      .pipe(
        tap(_ => {
          console.log('getData3ForSubject() - fetched games', _)})
      );
    // .subscribe(value => {
    //   console.log("value = " , value);
    // })
  }

  getDataByPage(postfix): Observable<any>{
    console.log("last url = " , this.lastUrl);
    let temp  =this.lastUrl+ postfix;
    console.log("get from : " , temp);
    return this.http.get<any>(temp)
      .pipe(
        tap(_ => {
          console.log('getData3ForSubject() - fetched games', _)})
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
