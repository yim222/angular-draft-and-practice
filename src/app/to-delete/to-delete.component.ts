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
  solution(A) {
    return A.reduce(this.reducer, 0);
  }

  reducer(acc, curr){
    if (curr % 4 == 0 ){
      acc += curr;
    }
    return acc;
  }


}
