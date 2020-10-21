import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbaService} from "./nba.service";
import {Game1, Team} from "./models";
import {BehaviorSubject} from "rxjs";

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
  gamesModels: Game1[] ;
  totalPages: number = 0;
  //the subject should be from here
  myBehavSubj : BehaviorSubject<any> = new BehaviorSubject<any>(null);
  season: string;
  seasons: number[] = [];
  loaded = false;



  constructor(private nbaService: NbaService) {
    // this.a = nbaService;
    for (let i = 2020 ; i >=1970 ; i--){
      this.seasons.push(i);
    }
  }

  ngOnInit(): void {
    // this.a.test();
    this.nbaService.test();
    console.log("ngOnInit NBAFeature");
    // this.nbaService.getData1().subscribe();
    // this.getGames();
    // this.getGames2();

    /***Trying do subject**/
    // this.nbaService.subj1.subscribe(this.test1);
    // this.nbaService.subj1.subscribe(this.test2);
    // // this.nbaService.subj1.next(this.nbaService.getData3ForSubject());// - Not working well
    // this.nbaService.getData3ForSubject()
    //   .subscribe( this.nbaService.subj1);

    /** Doing behavior **/
    let bs = this.nbaService.getDataSubject;
    this.nbaService.getDataSubject.subscribe(
      {
        next: ((res)=>{//U need to ensure that it's not generate error otherwise it won't subscribe it for the next (unlike regular subject) .
          if (res) {
            this.getPages(res.meta);
            this.test1(res)
          }
        }),
        error:((er)=>{
          console.log("get Pages error - ", er)
        }),
        complete:(()=>{
          console.log("anyway - get totalPages complete");
        })
      }
    );

    this.nbaService.getDataSubject.subscribe(
      {
        next: ((res)=>{//U need to ensure that it's not generate error otherwise it won't subscribe it for the next (unlike regular subject) .
          if (res) {
            this.assignData(res);
            // this.test1(res)
          }
        }),
        error:((er)=>{
          console.error("Assign data  error - ", er)
        }),
        complete:(()=>{
          console.log("anyway - Assign data complete");
        })
      }
    );
    // this.myBehavSubj.subscribe(this.assignData);
    /** this won't update the view :
     *
     *https://www.reddit.com/r/Angular2/comments/avlpz0/behaviorsubject_or_observable_stream_not_updating/
     * hats happens because delete function its on ngOnInit, so only works when a template load for first time,
     * try to put delete function outside ngOnInit and thats going to work
    //  */
    // setTimeout(()=>{
    //   console.log("timeout ? ");
    //   // this.nbaService.getData3ForSubject()
    //   //   .subscribe( this.nbaService.getDataSubject);
    //   this.totalPages = 500;
    // },5000);

    this.getGames3WithBSubject();


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

  getGames3WithBSubject(postfix?):void{
    console.log("get games 3 - behavior subject  ")
    this.nbaService.getData3ForSubject(postfix)
      //short-way-problem
      //uncomment this below line, and U can see that although it's the same idea, this does'nt update the view - when season changed !
      // .subscribe(this.myBehavSubj)
      .subscribe((res)=>{
        this.nbaService.getDataSubject.next(res);
        this.nbaService.resetPagesNav.next();
        this.loaded = true;
      } );
  }
  test1(val){
    console.log("NbaFeature.test 1. Val = " , val);
  }
  test2(val){
    console.log("NbaFeature.test 2. Val = " , val);
  }

  getPages(meta):void{
    console.log("getPages")
    this.totalPages = meta.total_pages;
  }
  assignData(res): void{
    console.log("assign data - " , res);

    if(res){
      this.gamesModels = res.data;
    }
    console.log("this.gamesModels" , this.gamesModels);
  }

  getWithSeason(){
    console.log("Getting games from this season - ", this.season, this.seasons);

    // this.season = val;
    console.log("Getting games from this season - ", this.season, this.seasons);
    let postfix = '&seasons[]='+ this.season;
    //u need to generate https://www.balldontlie.io/api/v1/games?seasons[]=1999&page=5&per_page=60
   // https://www.balldontlie.io/api/v1/games?page=5&per_page=60&seasons[]=1999
   //  this.nbaService.url1 +='&seasons[]='+this.season;
    this.getGames3WithBSubject(postfix);
    // ChangeDetectorRef.detectChanges();
  }
  totalLoaded(){
    return !isNaN(this.totalPages);
  }


}
