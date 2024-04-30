
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// import { BarcodeModule } from 'angular-barcode';


import { ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from "src/app/common/material-module";

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AiRoutingModule } from './ai-routing.module';
import { ViewAiLogsComponent } from './view-ai-logs/view-ai-logs.component';
import { ShowAiresponseComponent } from './show-airesponse/show-airesponse.component';
import { ShowImageComponent } from './show-image/show-image.component';


@NgModule({
  declarations: [
    ViewAiLogsComponent,
    ShowAiresponseComponent,
    ShowImageComponent
  ],
  imports: [
    CommonModule,
    AiRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    // BarcodeModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class AiModule { }
