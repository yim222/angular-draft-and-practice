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

}
