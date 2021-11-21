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
import {ExercisesComponent} from "./exercises/exercises.component";
import {ExercisesResultsComponent} from "./exercises-results/exercises-results.component";
import {NBAFeatureComponent} from "./exercises-results/nba-feature/nba-feature.component";
import {AngularFundamentalsComponent} from "./angular-fundamentals/angular-fundamentals.component";
import {ViewChildDecoratorComponent} from "./angular-fundamentals/components/view-child-decorator/view-child-decorator.component";
import {
  AnotherInnerComp,
  SimpleDrawSquareComponent
} from "./exercises-results/simple-draw-square/simple-draw-square.component";
import {ToDeleteComponent} from "./to-delete/to-delete.component";
import {StateDataManagementMainComponent} from "./state-data-management/state-data-management-main/state-data-management-main.component";


const routes: Routes = [
  { path: 'ang-fund', component: AngularFundamentalsComponent, children: [
    {path: 'view-child', component: ViewChildDecoratorComponent}
    ] },
  { path: 'learn-rxjs', component: LearnRxJSComponent },
  { path: 'draft-area', component: DraftAreaComponent},
  { path: 'blank-page', component: ToDeleteComponent},
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
  { path: 'ng-pipes', component: AngularPipesComponent},
  { path: 'exercises', component: ExercisesComponent},
  { path: 'exercises-results', component: ExercisesResultsComponent, children: [
      {path: 'nba-exercise', component: NBAFeatureComponent},
      {path: 'simple-comp1', component: SimpleDrawSquareComponent},
      {path: 'inner-template', component: AnotherInnerComp}
    ]},
  { path: 'state-data-management', component: StateDataManagementMainComponent, children: [
      {path: '', component: StateDataManagementMainComponent},
      // {path: 'simple-comp1', component: SimpleDrawSquareComponent},
      // {path: 'inner-template', component: AnotherInnerComp}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
