import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-delete',
  templateUrl: './to-delete.component.html',
  styleUrls: ['./to-delete.component.css']
})
export class ToDeleteComponent implements OnInit {

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
