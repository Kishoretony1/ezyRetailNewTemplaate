import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { ViewBannerComponent } from './view-banner/view-banner.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { MerchantPaymentComponent } from './merchant-payment/merchant-payment.component';

@NgModule({
  declarations: [
    PaymentOptionsComponent,
    ViewBannerComponent,
    PaymentMethodsComponent,
    MerchantPaymentComponent,


    // TopPromotionsComponent,
        //  PaymentOptionsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingsModule { }
