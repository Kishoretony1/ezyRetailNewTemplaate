import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

import { DevicesRoutingModule } from './devices-routing.module';
import { EzyCartComponent } from './ezy-cart/ezy-cart.component';
import { ViewTrollyNumberComponent } from './view-trolly-number/view-trolly-number.component';
import { EzyCartLiteComponent } from './ezy-cart-lite/ezy-cart-lite.component';


@NgModule({
  declarations: [
    EzyCartComponent,
    ViewTrollyNumberComponent,
    EzyCartLiteComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MatIconModule,
    MatDialogModule,
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
export class DevicesModule { }
