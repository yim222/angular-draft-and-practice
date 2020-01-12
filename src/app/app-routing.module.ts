import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LearnRxJSComponent} from './learn-rx-js/learn-rx-js.component';
import {DraftAreaComponent} from "./draft-area/draft-area.component";
import {PromisesComponent} from "./promises/promises.component";
import {LearnServiceComponent} from "./learn-service/learn-service.component";


const routes: Routes = [
  { path: 'learn-rxjs', component: LearnRxJSComponent },
  { path: 'draft-area', component: DraftAreaComponent},
  { path: 'promises', component: PromisesComponent},
  { path: 'services', component: LearnServiceComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
