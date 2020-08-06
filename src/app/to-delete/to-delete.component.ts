import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-delete',
  templateUrl: './to-delete.component.html',
  styleUrls: ['./to-delete.component.css']
})
export class ToDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*
    Given A = [1, 2, 3], the function should return 4.

    Given A = [−1, −3], the function should return 1.

    [2,1,9,4] return 3
     */
    let A = [1,2,3];
    let B =  [10, 2, -1,-3];
    let B2 =  [ -1,-3];

    let C = [22,2,1,9,4];
    let D = [1, 3, 6, 4, 1, 2];
    console.log(this.solution(A));
    console.log(this.solution(B));
    console.log(this.solution(B2));

    console.log(this.solution(C));
    console.log(this.solution(D));


  }
  //find the smallest positive that not occur
  solution(A: Array<number>) {
    //sort the array
    A.sort(function(a, b) {
      return a - b;
    });
    console.log("after sort - " , A);
    //cut above 0
    let newArr = A.reduce(this.reducer, []);
    //remove duplicates
    // var unique = a.filter( onlyUnique );
    newArr = newArr.filter(this.onlyUnique);
    console.log("new array = " , newArr);
    if (newArr.length <1){
      return 1;
    }else{
      for(let i = 0 ; i< newArr.length ;i++){
        if (i+1 < newArr[i]){
          return i+1;
        }
      }
      //if all finished so the smallest not appear positive is above the arra
      return newArr[newArr.length-1]+1;
    }




    //case it's empty - it's one
    //count against counter - when the counter < the element - it's the missing. return it.

  }
  reducer(acc, curr){
    if(curr > 0 ){
      acc.push(curr);
    }
    return acc;
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


}
