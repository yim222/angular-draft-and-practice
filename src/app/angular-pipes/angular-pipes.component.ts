import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.scss']
})
export class AngularPipesComponent implements OnInit {
  currentDate = new Date();
  datePar1 =   "fullDate";
  short = true;
  constructor() { }

  ngOnInit(): void {
  }

  get x(){
    return 'x value';
  }

  get datePar2(){
    return this.short ? 'shortDate': 'fullDate';
  }
  toggleShort(){
    this.short = !this.short;
  }

  // get y(num){//U cannot with parameters
  //   if (num%2 === 0){
  //     return 'y even';
  //   }
  //   else {
  //     return 'y odd';
  //   }
  // }

}
