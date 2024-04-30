import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/api.service';
import {HttpClient} from '@angular/common/http';
import { Location } from '@angular/common';

import { AuthService } from '../../../common/auth.service';
// import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { animate,state, style, transition, trigger } from '@angular/animations';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/common/dialog-component/dialog-component';
import { id_user } from '../../dashboard/view/tableData';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
@Component({
  selector: 'app-show-airesponse',
  templateUrl: './show-airesponse.component.html',
  styleUrls: ['./show-airesponse.component.scss']
})
export class ShowAiresponseComponent implements OnInit
{
  saveForm!: FormGroup;
  submitted = false;
  attachfile: any = File;
  url : any;
  constructor(private router : Router,private dialog: MatDialog,private formBuilder: FormBuilder, private apiService: ApiService,  private dialogRef: MatDialogRef<ShowAiresponseComponent>,  @Inject(MAT_DIALOG_DATA) public data: any ) {

  }

  ngOnInit(): void {
    this.saveForm = this.formBuilder.group({
      banner: ['', Validators.required]
    });
  }
  closeDialog(){
    this.dialogRef.close();
  }
  
}
