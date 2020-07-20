import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearnRxJSComponent } from './learn-rx-js/learn-rx-js.component';
import {AlertModule} from "ngx-bootstrap";
import { NgBuildUnderstandingComponent } from './ng-build-understanding/ng-build-understanding.component';
import { DraftAreaComponent } from './draft-area/draft-area.component';
import { PromisesComponent } from './promises/promises.component';
import { LearnServiceComponent } from './learn-service/learn-service.component';
import { SubComponentAComponent } from './learn-service/sub-component-a/sub-component-a.component';
import { SubscriptionComponent } from './learn-rx-js/rxjs-comps/subscription/subscription.component';
import { LearnSubjectsComponent } from './learn-rx-js/rxjs-comps/learn-subjects/learn-subjects.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { SubTempComponent } from './template-syntax/sub-temp/sub-temp.component';
import {MaterialModule} from "./material-module";
import { DragDropNestedComponent } from './drag-drop-nested/drag-drop-nested.component';
import { RecursiveCompComponent } from './drag-drop-nested/recursive-comp/recursive-comp.component';
import { SimpleExamplesComponent } from './drag-drop-nested/simple-examples/simple-examples.component';
import { RecursiveComp2Component } from './drag-drop-nested/recursive-comp2/recursive-comp2.component';
import { LearnStyleComponent } from './learn-style/learn-style.component';
import { BasicStyleComponent } from './learn-style/basic-style/basic-style.component';
import { SCSSComponent } from './learn-style/scss/scss.component';
import { PositionUnderstandComponent } from './learn-style/position-understand/position-understand.component';
import { DataFlowingComponent } from './data-flowing/data-flowing.component';
import { ItemComponent } from './data-flowing/item/item.component';
import { ItemsComponent } from './data-flowing/items/items.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { HttpClientModule }    from '@angular/common/http';
//Import locales
import { registerLocaleData } from '@angular/common';
import localeHe from '@angular/common/locales/he';
import localFr from '@angular/common/locales/fr';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExercisesResultsComponent } from './exercises-results/exercises-results.component';
import { NBAFeatureComponent } from './exercises-results/nba-feature/nba-feature.component';
import { InnerTestComponent } from './exercises-results/inner-test/inner-test.component';
import { PagesNavigatorComponent } from './exercises-results/nba-feature/pages-navigator/pages-navigator.component';
import { Comp1Component } from './draft-area/comp1/comp1.component';
import {Pane, ViewChildComp} from "./draft-area/online-example/example1";
import { ColorPickerViewchildComponent } from './draft-area/color-picker-viewchild/color-picker-viewchild.component';
import {ColorSampleComponent} from "./draft-area/color-sample/color-sample.component";
registerLocaleData(localeHe, 'lin-he');//Here u register the locale U've imported.
registerLocaleData(localFr);//default is fr


@NgModule({
  declarations: [
    AppComponent,
    LearnRxJSComponent,
    NgBuildUnderstandingComponent,
    DraftAreaComponent,
    PromisesComponent,
    LearnServiceComponent,
    SubComponentAComponent,
    SubscriptionComponent,
    LearnSubjectsComponent,
    TemplateSyntaxComponent,
    SubTempComponent,
    DragDropNestedComponent,
    RecursiveCompComponent,
    SimpleExamplesComponent,
    RecursiveComp2Component,
    LearnStyleComponent,
    BasicStyleComponent,
    SCSSComponent,
    PositionUnderstandComponent,
    DataFlowingComponent,
    ItemComponent,
    ItemsComponent,
    AngularPipesComponent,
    ExercisesComponent,
    ExercisesResultsComponent,
    NBAFeatureComponent,
    InnerTestComponent,
    PagesNavigatorComponent,
    Comp1Component,
    ViewChildComp,
    Pane,
    ColorPickerViewchildComponent,
    ColorSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    // {provide: myLocal, useValue: 'lin-he'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
