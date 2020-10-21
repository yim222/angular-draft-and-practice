import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-draw-square',
  templateUrl: './simple-draw-square.component.html',
  styleUrls: ['./simple-draw-square.component.css']
})
export class SimpleDrawSquareComponent implements OnInit {
  x1 = "Initial value ";
  square: ElementRef;
  width = 50;
  height = 50;
  frameColor = "black";
  fillColor = "white";
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event){
    console.log("Event = ", event);
  }

}
@Component({
  selector: 'inline-template',
  template: `
    <div>
      <button class = "like-button" (click)="like()" [ngClass]="{'liked': liked}">Like | <span class ="likes-counter">{{likes}}</span></button>

      <button class = "dislike-button" (click)="dislike()" [ngClass]="{'disliked': disliked}">Dislike | <span class ="dislikes-counter">{{dislikes}}</span></button>

    </div>
  `,
  styles: [`
    .like-button, .dislike-button {
      font-size: 1rem;
      padding: 5px 10px;
      color:   #585858;
    }

    .liked, .disliked {
      font-weight: bold;
      color: #1565c0;
    }

  `]
})
export class AnotherInnerComp{


  likes = 100;
  dislikes = 25;
  liked = false;
  disliked = false;
  constructor() { }

  ngOnInit(): void {

  }

  like(){
    //switch liked state
    this.liked = !this.liked;
    //check  liked state
    if (this.liked){
      //increase
      this.likes++;
      //check if dislike - and if does - cancel - call to dislike() TODO
      if(this.disliked){
        this.dislike();
      }
    }
    //if liked cancelled
    else{
      //decrease
      this.likes--;
    }
  }

  dislike(){
    //switch disliked state
    this.disliked = !this.disliked;
    //check  disliked state
    if (this.disliked){
      //increase
      this.dislikes++;
      //check if liked - and if does - cancel - call to like()
      if(this.liked){
        this.like();
      }
    }
    //if disliked cancelled
    else{
      //decrease
      this.dislikes--;
    }
  }



}
