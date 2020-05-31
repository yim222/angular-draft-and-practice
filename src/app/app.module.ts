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
    AngularPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
