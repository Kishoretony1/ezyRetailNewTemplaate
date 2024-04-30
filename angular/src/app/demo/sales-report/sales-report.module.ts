import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SalesReportRoutingModule } from './sales-report-routing.module';
import { ByTransactionEzycartComponent } from './by-transaction-ezycart/by-transaction-ezycart.component';
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
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { ConfirmValidationComponent } from './transactiondetails/confirm-validation/confirm-validation.component';
import { ViewInvoicenumberComponent } from './transactiondetails/view-invoicenumber/view-invoicenumber.component';
import { SendInvoiceComponent } from './transactiondetails/send-invoice/send-invoice.component';
import { ByTransactionLiteComponent } from './by-transaction-lite/by-transaction-lite.component';



@NgModule({
  declarations: [
    ByTransactionEzycartComponent,
    TransactiondetailsComponent,
    ConfirmValidationComponent,
    ViewInvoicenumberComponent,
    SendInvoiceComponent,
    ByTransactionLiteComponent
  ],
  imports: [
    CommonModule,
    SalesReportRoutingModule,
    CommonModule,
    MatIconModule,
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
export class SalesReportModule { }
