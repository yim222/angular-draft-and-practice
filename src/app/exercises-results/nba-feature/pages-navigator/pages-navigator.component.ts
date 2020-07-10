import {Component, OnInit, OnChanges, DoCheck} from '@angular/core';

/**
 * Component pages navigator
 * need :
 * total, current, n - (the number of the pages represent in a row)
 * pages-nav array
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
  total: number = 976;
  current: number = 1;
  n: number = 10;
  start: number;
  pagesDisplay: string[] ;
  constructor() { }

  ngOnInit(): void {
    this.generateList();
  }
  ngDoCheck():void{
    console.log("Change...")

  }
  setStart(){
    // this.current = chosen;
    console.log("setStart()");

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
    this.pagesDisplay.splice(0,0, '<<<','start');
    this.pagesDisplay.push('...');
    this.pagesDisplay.push('last');
    console.log("pages display = " , this.pagesDisplay);
  }

  changePage(action: any):void{

    console.log("changePage(action) = " , action , !isNaN(+action));
    if (!isNaN(+action)){
      this.current = +action;
      action = 'isNum';
    }
    switch (action) {
      case  'start':
        this.current = 1;
        this.generateList();
        console.log("want to go to start");
        console.log("And ? ");
        break;
      case  'last':
        this.current = this.total;
        this.generateList();
        console.log("want to go to last");
        break;
      case 'isNum'://if it's number
        // this.current = +action;
        console.log(" go to page " + action);
        this.generateList() ;
        break;


    }

  }

}
