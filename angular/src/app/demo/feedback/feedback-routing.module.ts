import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';



const routes: Routes = [
  {
    path: "view_feedback",
    component: ViewFeedbackComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
