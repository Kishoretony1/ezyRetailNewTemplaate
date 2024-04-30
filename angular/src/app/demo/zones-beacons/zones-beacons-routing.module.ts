import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewZonesBeaconsComponent } from './view-zones-beacons/view-zones-beacons.component';
import { ViewBeaconsComponent } from './view-beacons/view-beacons.component';

const routes: Routes = [
  {
    path: "view_zones",
    component: ViewZonesBeaconsComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "view_beacons",
  component: ViewBeaconsComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonesBeaconsRoutingModule { }
