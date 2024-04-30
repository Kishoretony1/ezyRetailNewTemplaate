import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAdvertisementComponent } from './view-advertisement/view-advertisement.component';

const routes: Routes = [
  {
    path: "view_advertisement",
    component: ViewAdvertisementComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule { }
