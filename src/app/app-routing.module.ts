import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LearnRxJSComponent} from './learn-rx-js/learn-rx-js.component';
import {DraftAreaComponent} from "./draft-area/draft-area.component";
import {PromisesComponent} from "./promises/promises.component";
import {LearnServiceComponent} from "./learn-service/learn-service.component";
import {SubscriptionComponent} from "./learn-rx-js/rxjs-comps/subscription/subscription.component";
import {LearnSubjectsComponent} from "./learn-rx-js/rxjs-comps/learn-subjects/learn-subjects.component";
import {TemplateSyntaxComponent} from "./template-syntax/template-syntax.component";


const routes: Routes = [
  { path: 'learn-rxjs', component: LearnRxJSComponent },
  { path: 'draft-area', component: DraftAreaComponent},
  { path: 'promises', component: PromisesComponent},
  { path: 'services', component: LearnServiceComponent},
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'subjects', component: LearnSubjectsComponent },
  { path: 'template-syntax', component: TemplateSyntaxComponent }






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
