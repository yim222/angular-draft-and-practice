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
    LearnSubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
