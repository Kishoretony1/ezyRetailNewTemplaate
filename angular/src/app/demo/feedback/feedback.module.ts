import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedbackRoutingModule } from './feedback-routing.module';

import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';

// import { MaterialModule } from "src/app/common/material-module";

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ViewFeedbackComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,


    // MatInputModule,
    // MatIconModule,
    MatDialogModule,
  ]
})
export class FeedbackModule { }
