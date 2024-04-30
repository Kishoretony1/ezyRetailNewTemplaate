import { Component, ViewChild,OnDestroy, OnInit,ElementRef ,Inject} from '@angular/core';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { ApiService } from '../../../../common/api.service';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { animate,state, style, transition, trigger } from '@angular/animations';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/common/dialog-component/dialog-component';
import { id_user } from '../../../dashboard/view/tableData';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-send-invoice',
  templateUrl: './send-invoice.component.html',
  styleUrls: ['./send-invoice.component.scss']
})
export class SendInvoiceComponent implements Inject {
  details : any = {};
  id!: string;

  // docRef: any;
  nativeElement:any;
  intervalcall : any;
  page : any;
  // row:any
  routeLink : any;
  userDetails : any;
  outletName : any;
  saveForm!: FormGroup;
  submitted = false;
  attachfile: any = File;
  url : any;
  value : any;
  customerEmail!: string;
  customerPhoneNo!: string;


  constructor(private router : Router,private route: ActivatedRoute,private dialog: MatDialog,private formBuilder: FormBuilder, private apiService: ApiService,private http: HttpClient,  private dialogRef: MatDialogRef<SendInvoiceComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any ) {
    console.log(data.customerEmail);
    console.log(data.customerPhoneNo);
    console.log(data.id);

  }
  token: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this. id = params['id'];
      this.customerEmail = params['customerEmail'];
      this.customerPhoneNo=params['customerPhoneNo'];
    });
    // console.log(this.customerEmail);
    this.saveForm = this.formBuilder.group({
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
    });
}


saveFile(formVal: any) {
  this.submitted = true;
  if (formVal) {

    const requestData = {
      email: this.saveForm.value.email,
      mobileNo: this.saveForm.value.mobileNo,
    };


    console.log(requestData);

    this.apiService.post('ezyCart/payment/'+this.id +'/receipt', requestData).subscribe(
      (data: any) => {
        this.dialogRef.close();
        this.dialog.open(DialogComponent, {
          disableClose: false,
          width: 'auto',
          data: {
            type: 'success',
            message: 'Send successfullyy',
            btnClose: 'OK',
          },
        });
      },
      (err) => {
        this.dialogRef.close();
        this.dialog.open(DialogComponent, {
          disableClose: false,
          width: 'auto',
          data: {
            type: 'warn',
            message: 'not send successfully',
            btnClose: 'OK',
          },
        });
      }
    );
  }
}








  closeDialog(){
    this.dialogRef.close();
  }
  truenoffLoader(){
  }
}
