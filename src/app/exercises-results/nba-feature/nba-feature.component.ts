import { Component, OnInit } from '@angular/core';
import {NbaService} from "./nba.service";
import {Game1, Team} from "./models";

@Component({
  selector: 'app-nba-feature',
  templateUrl: './nba-feature.component.html',
  styleUrls: ['./nba-feature.component.css']
})
export class NBAFeatureComponent implements OnInit {
  // a:NbaService;
  example = ['a','b','c'];
  games: any[] ;
  // checkInfce: Team = {id : 8};
  checkInfce: Team = {id : 8, full_name: 'lingars '};
  gamesModels: Game1[];

  constructor(private nbaService: NbaService) {
    // this.a = nbaService;
  }

  ngOnInit(): void {
    // this.a.test();
    this.nbaService.test();
    console.log("ngOnInit NBAFeature");
    // this.nbaService.getData1().subscribe();
    // this.getGames();
    this.getGames2();

    /***Trying do subject**/
    this.nbaService.subj1.subscribe(this.test1);
    this.nbaService.subj1.subscribe(this.test2);
    // this.nbaService.subj1.next(this.nbaService.getData3ForSubject());// - Not working well
    // this.nbaService.getData3ForSubject()
    //   .subscribe( this.nbaService.subj1);
    // this.nbaService.obs1.subscribe();
    this.getGames3WithSubj();
    // setTimeout(()=>{
    //   console.log("next ? ");
    //   this.nbaService.subj1.next();
    // },3000);



  }
  getGames():void{
    this.nbaService.getData1()
      .subscribe(res =>{
        console.log("res ? " , res);
        this.games = res.data;
      })
  }

  /**
   * getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
   */
  getGames2():void{
    console.log("get games 2 ")
    this.nbaService.getData2()
      .subscribe(res =>{
        console.log("res ? " , res);
        this.gamesModels = res.data;
      })
  }
  getGames3WithSubj():void{
    console.log("get games 3 - with subjects - by next... ");
    this.nbaService.getData3ForSubject().subscribe((val)=>{
      this.nbaService.subj1.next(val);
      }

    )
  }
  test1(val){
    console.log("NbaFeature.test 1. Val = " , val);
  }
  test2(val){
    console.log("NbaFeature.test 2. Val = " , val);
  }

}
