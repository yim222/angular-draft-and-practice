export interface Game1{
  id: number,
  date: Date,
  home_team : Team,
  visitor_team: Team,
  home_team_score: number,
  visitor_team_score: number

}
export interface Team{
  id: number,
  full_name: string
}
// {g.home_team.full_name}} - {{g.home_team_score}}</p>
// <p>VS</p>
// <p class = 'visitor-team'>{{g.visitor_team.full_name}} - {{g.visitor_team_score}}</p>
export class PagesLine{
  //start not needed U can get it with the current
  //Here for example U did able to use initialization of class total, n last
  // current  :number;
  // start: number;
  total: number;
  n: number;
  current: number;

  constructor() {

  }
}

export enum PagesNavOption {
  //   this.pagesDisplay = ['<<<','start', '...', 'end'];
  START = 'start' ,
  LAST = 'last',
  NEXT = '>>',
  PREVIOUS = '<<'
}
