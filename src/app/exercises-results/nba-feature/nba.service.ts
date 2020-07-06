import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Game1} from "./models";

@Injectable({
  providedIn: 'root'
})
export class NbaService {
  url1: string = 'https://www.balldontlie.io/api/v1/games?per_page=50';
  totalPages: number;
  subj1: Subject<any> = new Subject<any>();
  behavSubj1:  BehaviorSubject<any> = new BehaviorSubject<any>(null);

  obs1: Observable<any>;


  constructor(private http: HttpClient) {
    console.log("NbaService here");
    this.obs1 = this.getData3ForSubject();
    // this.obs1.subscribe(this.subj1);
    this.subj1.subscribe({
      // next: this.getData3ForSubject
      // // next: this.obs1,
      next: (()=>{
        this.test();
      })
    })

  }
  test():any{
    console.log("Test NBA Service ");
    return of("test data");
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
  getData3ForSubject(): Observable<any>{
    return this.http.get<any>('https://www.balldontlie.io/api/v1/games')
      .pipe(
        tap(_ => {
          console.log('getData3ForSubject() - fetched games', _)})
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
