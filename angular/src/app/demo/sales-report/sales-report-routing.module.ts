import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByTransactionEzycartComponent } from './by-transaction-ezycart/by-transaction-ezycart.component';
import { TransactiondetailsComponent } from './transactiondetails/transactiondetails.component';
import { ViewInvoicenumberComponent } from './transactiondetails/view-invoicenumber/view-invoicenumber.component';
import { ByTransactionLiteComponent } from './by-transaction-lite/by-transaction-lite.component';

const routes: Routes = [
  {
    path: "ByTransactionEzycart",
    component: ByTransactionEzycartComponent,
    // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "transactionDetails",
  component: TransactiondetailsComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "invoicePgae",
  component: ViewInvoicenumberComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},
{
  path: "ByTransactionLite",
  component: ByTransactionLiteComponent,
  // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesReportRoutingModule { }
