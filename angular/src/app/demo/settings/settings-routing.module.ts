import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { ViewBannerComponent } from './view-banner/view-banner.component';
import { MerchantPaymentComponent } from './merchant-payment/merchant-payment.component';

const routes: Routes =
[
  {
    path: '',
    children: [
      {
        path: "view_settings",
        component: ViewBannerComponent,
        // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
      },

      {
        path: "view_payment_options",
        component: PaymentOptionsComponent,
        // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
      },
      {
        path: "view_payment_methods",
        component: PaymentMethodsComponent,
        // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
      },
      {
        path: "view_merchant_payments",
        component: MerchantPaymentComponent,
        // data: { title: "Feedbacks", breadCrumbs: [ 'Feedbacks'] }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
