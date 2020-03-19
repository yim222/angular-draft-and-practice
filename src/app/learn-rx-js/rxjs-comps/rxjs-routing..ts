import {Injectable, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubscriptionComponent} from "./subscription/subscription.component";



const routes: Routes = [
  { path: 'subscription', component: SubscriptionComponent }



];
// @NgModule({
//   imports: [
//     RouterModule.forChild(upsellRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
//

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

@Injectable({
  providedIn: 'root'
})
export class RxjsRoutingService {



}
