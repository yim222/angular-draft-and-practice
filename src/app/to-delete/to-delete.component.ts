import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-delete',
  templateUrl: './to-delete.component.html',
  styleUrls: ['./to-delete.component.css']
})
export class ToDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let A = [-6, -91, 1011, -100, 84, -22, 0, 1, 473];
    console.log(this.solution(A));
  }

  //find odo vs pairs. if it's equal it's good.
  solution(A) {
    let odds = 0;
    let evens = 0;
    for (let i=0; i< A.length; i++){
      if (A[i] % 2 === 0){
        evens ++;
      }
      else{
        odds++;
      }
    }
    if (evens === odds){
      return true;
    }
    return false;
  }

  reducer(acc, curr){

  }


}
