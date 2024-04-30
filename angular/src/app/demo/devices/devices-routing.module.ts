import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EzyCartComponent } from './ezy-cart/ezy-cart.component';
import { EzyCartLiteComponent } from './ezy-cart-lite/ezy-cart-lite.component';
import { ViewTrollyNumberComponent } from './view-trolly-number/view-trolly-number.component';
const routes: Routes = [
  {
    path: "view_ezyCart",
    component: EzyCartComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "trollyNumberDetails",
  component: ViewTrollyNumberComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "view_ezyCart_lite",
  component: EzyCartLiteComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
