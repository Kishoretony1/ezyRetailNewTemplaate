import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAiLogsComponent } from './view-ai-logs/view-ai-logs.component';


const routes: Routes = [
  {
    path: "view_AI_Logs",
    component: ViewAiLogsComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AiRoutingModule { }
