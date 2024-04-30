import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbandonedCartEzycartComponent } from './abandoned-cart-ezycart/abandoned-cart-ezycart.component';
import { AbandonedCartLiteComponent } from './abandoned-cart-lite/abandoned-cart-lite.component';

const routes: Routes = [
  {
    path: "view_abandoned_cart_ezycart",
    component: AbandonedCartEzycartComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "view_abandoned_cart_ezycart_lite",
  component: AbandonedCartLiteComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
