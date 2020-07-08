import { Component, OnInit } from '@angular/core';

/**
 * Component pages navigator
 * need :
 * total, current, n - (the number of the pages represent in a row)
 * pages-nav array
 */
@Component({
  selector: 'app-pages-navigator',
  templateUrl: './pages-navigator.component.html',
  styleUrls: ['./pages-navigator.component.css']
})
export class PagesNavigatorComponent implements OnInit {
  total: number = 100;
  current: number = 50;
  n: number = 8;
  start: number;
  pagesDisplay: string[] = ['start', '...', 'end'];
  constructor() { }

  ngOnInit(): void {
    this.generateList();
  }

  /*- Comment the generation and functionality needed functions. */
  //generate the array due to the current.
  //U know how much (n) in each line
  //make calculation of what part U stand.
  //For example if u on 56 U are at part six. How U do it by calc... ?
  /*
    current/ n + 1 = start
   */
  generateList(chosen =15){
    this.current = chosen;
    console.log( Math.floor(chosen/ this.n )* this.n);
    // this.start = this.current/this.n * this.n+ 1;
    this.start = Math.floor(chosen/ this.n )* this.n + 1 ;
    console.log("Start = ", this.start);
    this.pagesDisplay = [];
    let index = 1;
    for(let i = this.start; i < this.start + this.n; i ++){
      this.pagesDisplay.push(i+"");
    }
    this.pagesDisplay.splice(0,0, 'start');
    this.pagesDisplay.push('...');
    this.pagesDisplay.push('last');
    console.log("pages display = " , this.pagesDisplay);
  }

}
