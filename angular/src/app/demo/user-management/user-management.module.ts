import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ViewModuleComponent } from './view-module/view-module.component';

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
import { ViewFeatureComponent } from './view-feature/view-feature.component';
import { ViewRoleComponent } from './view-role/view-role.component';


@NgModule({
  declarations: [
    ViewModuleComponent,
    ViewFeatureComponent,
    ViewRoleComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
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
export class UserManagementModule { }
