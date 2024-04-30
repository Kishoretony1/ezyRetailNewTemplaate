import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewModuleComponent } from './view-module/view-module.component';
import { ViewFeatureComponent } from './view-feature/view-feature.component';
import { ViewRoleComponent } from './view-role/view-role.component';

const routes: Routes = [
  {
    path: "view_module",
    component: ViewModuleComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
    path: "view_feature",
    component: ViewFeatureComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "view_role",
  component: ViewRoleComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
