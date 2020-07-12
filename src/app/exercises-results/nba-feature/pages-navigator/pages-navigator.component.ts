import {Component, OnInit, OnChanges, DoCheck, Input, ViewChild} from '@angular/core';
import {PagesNavOption} from "../models";
import {NbaService} from "../nba.service";

/**
 * Component totalPages navigator
 * need :
 * total, current, n - (the number of the totalPages represent in a row)
 * totalPages-nav array
 */

/**
 * TODO
 * - if current is the last on the row - to show until it, not the next . (the start need to be other) .
 * - To make : handle to the actions : current, start,last, previous, next
 * - Handle consideration in the total (Not suppose to show greater then total). Current should not be more then total.
 *
 * U HERE - next time :
 * 1- DO the next and previous.
 * 2- Check why the onChange startegy don't work.
 * 3- Continue with the todo .
 *
 */

//Problem - do check on changes, noot working... The start is broken after the changes.
@Component({
  selector: 'app-pages-navigator',
  templateUrl: './pages-navigator.component.html',
  styleUrls: ['./pages-navigator.component.css']
})
export class PagesNavigatorComponent implements OnInit {
  @Input()
  total: number ;
  @Input()
  current: number = 36;
  @Input()
  n: number = 10;
  start: number;
  pagesDisplay: string[] ;
  constructor(public nbaService: NbaService) { }

  ngOnInit(): void {
    this.generateList();
    this.nbaService.behavSubj.subscribe((res)=>{
      console.log("subscribe of page nav");
      this.current = 1;
      // this.total = res.meta.total_pages;
      this.generateList();
    } );
  }
  ngDoCheck():void{
    console.log("Change...")

  }
  setStart(){
    // this.current = chosen;
    console.log("setStart()");
    console.log("Current = " , this.current)
    console.log( Math.floor(this.current/ this.n )* this.n);
    // this.start = this.current/this.n * this.n+ 1;
    if (this.current % this.n === 0){
      this.start = Math.floor((this.current-this.n)/ this.n )* this.n  +1 ;

    }else{
      this.start = Math.floor(this.current/ this.n )* this.n  +1 ;

    }
    console.log("Start = ", this.start);

  }

  resetList(){//not needed
   this.pagesDisplay = ['<<<','start', '...', 'end'];
  }

  generateList(){
    this.setStart();
    let upperBound = this.n;
    console.log("Start = " , this.start)
    //Generate the list by the start
    //clean the list
    this.pagesDisplay = [];
    //case it's reach the total :
    // if(this.current - this.start < this.n){
    //   upperBound = this.current - this.start+1;
    // }
    for(let i = this.start; i < this.start + upperBound; i ++){
      if (i > this.total){
        break;
      }
      this.pagesDisplay.push(i+"");

    }

    //Organize the list again.
    this.pagesDisplay.splice(0,0, PagesNavOption.PREVIOUS, PagesNavOption.START);
    this.pagesDisplay.push(PagesNavOption.NEXT);
    this.pagesDisplay.push(PagesNavOption.LAST);
    console.log("totalPages display = " , this.pagesDisplay);
  }

  changePage(action: any):void{

    console.log("changePage(action) = " , action , !isNaN(+action));
    if (!isNaN(+action)){
      this.current = +action;
      action = 'isNum';
    }
    switch (action) {
      case  PagesNavOption.START:
        this.current = 1;
        this.generateList();
        console.log("want to go to start");
        console.log("And ? ");
        break;
      case  PagesNavOption.LAST:
        this.current = this.total;
        this.generateList();
        console.log("want to go to last");
        break;
      case PagesNavOption.NEXT:
        console.log("next ... " ,  this.start + this.n);
        this.current = this.start + this.n;

        this.generateList() ;
        break;
      case PagesNavOption.PREVIOUS:
        console.log("previous  ... " ,  this.start - 1);
        this.current = this.start -1 ;

        this.generateList() ;
        break;
      case 'isNum'://if it's number
        // this.current = +action;
        console.log(" go to page " + action);
        this.generateList() ;
        break;
      default:
        console.log("Default happening. ");


    }

  }

}
