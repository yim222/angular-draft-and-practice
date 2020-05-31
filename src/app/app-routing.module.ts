import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LearnRxJSComponent} from './learn-rx-js/learn-rx-js.component';
import {DraftAreaComponent} from "./draft-area/draft-area.component";
import {PromisesComponent} from "./promises/promises.component";
import {LearnServiceComponent} from "./learn-service/learn-service.component";
import {SubscriptionComponent} from "./learn-rx-js/rxjs-comps/subscription/subscription.component";
import {LearnSubjectsComponent} from "./learn-rx-js/rxjs-comps/learn-subjects/learn-subjects.component";
import {TemplateSyntaxComponent} from "./template-syntax/template-syntax.component";
import {DragDropNestedComponent} from "./drag-drop-nested/drag-drop-nested.component";
import {SimpleExamplesComponent} from "./drag-drop-nested/simple-examples/simple-examples.component";
import {RecursiveCompComponent} from "./drag-drop-nested/recursive-comp/recursive-comp.component";
import {LearnStyleComponent} from "./learn-style/learn-style.component";
import {BasicStyleComponent} from "./learn-style/basic-style/basic-style.component";
import {SCSSComponent} from "./learn-style/scss/scss.component";
import {PositionUnderstandComponent} from "./learn-style/position-understand/position-understand.component";
import {DataFlowingComponent} from "./data-flowing/data-flowing.component";
import {AngularPipesComponent} from "./angular-pipes/angular-pipes.component";


const routes: Routes = [
  { path: 'learn-rxjs', component: LearnRxJSComponent },
  { path: 'draft-area', component: DraftAreaComponent},
  { path: 'promises', component: PromisesComponent},
  { path: 'services', component: LearnServiceComponent},
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'subjects', component: LearnSubjectsComponent },
  { path: 'template-syntax', component: TemplateSyntaxComponent },
  { path: 'dd-tree', component: DragDropNestedComponent, children:[
      { path: '', component: DragDropNestedComponent},
      {path:'simple', component: SimpleExamplesComponent},
      {path: 'recursive', component: RecursiveCompComponent}
    ] },
  { path: 'learn-style', component: LearnStyleComponent, children:[
      // { path: '', component: LearnStyleComponent},
      {path:'simple', component: BasicStyleComponent},
      {path: 'scss', component: SCSSComponent},
      {path: 'und-positions', component: PositionUnderstandComponent}

    ] },
  { path: 'data-flowing', component: DataFlowingComponent, children:[
      { path: '', component: DataFlowingComponent},
      // {path:'simple', component: BasicStyleComponent},
      // {path: 'scss', component: SCSSComponent},
      // {path: 'und-positions', component: PositionUnderstandComponent}

    ] },
  { path: 'ng-pipes', component: AngularPipesComponent}







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
