import { Component, ViewChild,OnDestroy, OnInit } from '@angular/core';
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
import { MatDialog } from '@angular/material/dialog';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmValidationComponent } from './confirm-validation/confirm-validation.component';
import moment from 'moment';
@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.scss']
})
export class TransactiondetailsComponent implements OnInit, OnDestroy {

  elementType : any;
  details : any = {};
  // docRef: any;
  nativeElement:any;
  intervalcall : any;
  page : any;
  // row:any
  routeLink : any;
  userDetails : any;
  outletName : any;
  constructor(public location : Location,public auth : AuthService, private router : Router, private  apiService: ApiService,private dialog: MatDialog) {
  this.page = localStorage.getItem('page');
  this.userDetails = this.auth.getUserDetails();
  this.outletName = this.auth.getOutletName();
  }


  ngOnInit(): void {
    this.elementType = localStorage.getItem('qrCode');
    if(this.elementType){
    }else{
        this.router.navigate(['dashboard/salesReport/ByTransactionEzycart']);
      }
    this.getDetails();

    this.intervalcall = setInterval(() => {
      if(this.details && this.details.status == 'Pending') {  this.checkUpdate(); }
    }, 3000);

  }
  getDetails(){
    this.apiService.get('reports/sales/transactions/'+ localStorage.getItem('invoiceNum') + '/details').subscribe((data:any) => {
      if(data){
        this.details = data;
     if(this.details.paymentStatusText == 'Payment Success'){this.routeLink = 'dashboard/salesReport/ByTransactionEzycart';}
     if(this.details.paymentStatusText == 'Payment Refund Pending'){this.routeLink = '/Refund/processing';}
     if(this.details.paymentStatusText == 'Payment Refunded'){this.routeLink = '/Refund/completed';}
     if(this.details.paymentStatusText == 'Payment Failed'){this.routeLink = '/OtherReports/abandonedcart';}
     this.checkUpdate();
      }

    }, error => {
    })
  }
  checkUpdate(){
    this.apiService.get('reports/sales/order/'+this.details.invoiceNum+'/status')
      .subscribe((res:any) => {
      this.details.status = res.statusText;
      },
      err => {
        console.log(err);
      })
  }
  confirmValidation(val:string){
    if((val == 'Refund' && this.userDetails && this.userDetails.canRefund)||
    (val == 'Void' && this.userDetails && this.userDetails.canVoid) ){
      const dialogRef = this.dialog.open(ConfirmValidationComponent, {
      disableClose: false,
      width: "auto",
      data: {
        isDialog : true,
        invoiceNum : this.details.invoiceNum,
        actions: this.details.actions
      }
    }
    );
    dialogRef.afterClosed().subscribe((data: any) => {
      if(data == 'created'){
      this.ngOnInit();}
    });
  }else{
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false,
      width: "auto",
      data: {
        type : 'warn',
        message: "Sorry, you don't have access.",
        btnClose: "OK"
      }
    });
  }
  }
  viewInvoiceNum(){
    var hive=localStorage.getItem('invoiceNum');
    this.router.navigate(['dashboard/salesReport/invoicePgae'], { queryParams: { id: hive,
      customerEmail: this.details.customerEmail,
      customerPhoneNo: this.details.customerPhoneNo
    } });


  }


  // }


  openDocument(url : string){

    window.open(url)
  }
  posSync(){
    // const dialogRef = this.dialog.open(ShowPosSyncComponent, {
    //   disableClose: false,
    //   width: "auto",
    //   data: {
    //     isDialog : true,
    //     invoiceNum : this.details.invoiceNum,
    //     actions: this.details.actions
    //   }
    // });
  }
  ngOnDestroy() {
    localStorage.removeItem('qrCode');
    localStorage.removeItem('invoiceNum');
    localStorage.removeItem('page');
    clearInterval(this.intervalcall);
  }
  byTransactionBack(){
    this.location.back();

  }

}

