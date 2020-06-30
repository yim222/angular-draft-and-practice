import { Component, OnInit } from '@angular/core';
import {NbaService} from "./nba.service";

@Component({
  selector: 'app-nba-feature',
  templateUrl: './nba-feature.component.html',
  styleUrls: ['./nba-feature.component.css']
})
export class NBAFeatureComponent implements OnInit {
  // a:NbaService;
  example = ['a','b','c'];
  games: any[] ;
  constructor(private nbaService: NbaService) {
    // this.a = nbaService;
  }

  ngOnInit(): void {
    // this.a.test();
    this.nbaService.test();
    console.log("ngOnInit NBAFeature");
    // this.nbaService.getData1().subscribe();
    this.getGames();
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

}
