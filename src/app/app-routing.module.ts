import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LearnRxJSComponent} from './learn-rx-js/learn-rx-js.component';
import {DraftAreaComponent} from "./draft-area/draft-area.component";
import {PromisesComponent} from "./promises/promises.component";
import {LearnRxJs2Component} from "./learn-rx-js2/learn-rx-js2.component";


const routes: Routes = [
  { path: 'learn-rxjs', component: LearnRxJSComponent },
  { path: 'learn-rxjs-2', component: LearnRxJs2Component },

  { path: 'draft-area', component: DraftAreaComponent},
  { path: 'promises', component: PromisesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
