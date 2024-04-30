import { Component, ViewChild,OnDestroy, OnInit,ElementRef } from '@angular/core';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { ApiService } from '../../../../common/api.service';
import {HttpClient} from '@angular/common/http';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../common/auth.service';
// import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { animate,state, style, transition, trigger } from '@angular/animations';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/common/dialog-component/dialog-component';
import { id_user } from '../../../dashboard/view/tableData';
import { MatDialog } from '@angular/material/dialog';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment} from '../../../../../environments/environment';
import { SendInvoiceComponent } from '../send-invoice/send-invoice.component'


@Component({
  selector: 'app-view-invoicenumber',
  templateUrl: './view-invoicenumber.component.html',
  styleUrls: ['./view-invoicenumber.component.scss']
})
export class ViewInvoicenumberComponent implements OnInit{
  private URL: string = environment.apiUrl;
  iframeHeight = '980px';
  saveForm!: FormGroup;
  elementType : any;
  data:any;
  hive:any;
  submitted = false;
  attachfile: any = File;
  url : any;
  id!: string;
  dynamicLink:any;
  details : any = {};
  invoiceNum : any;
  routeLink : any;
  page:any;
  userDetails : any;
  outletName : any;
  customerEmail: any;
  customerPhoneNo: any;
  // el: any;
  constructor(private router : Router,private el: ElementRef,public location : Location,private route: ActivatedRoute,private sanitizer: DomSanitizer,public auth : AuthService,private dialog: MatDialog,private formBuilder: FormBuilder, private apiService: ApiService) {



  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.customerEmail = params['customerEmail'];
      this.customerPhoneNo = params['customerPhoneNo'];
      console.log(id);
      console.log(this.customerEmail);
      console.log(this.customerPhoneNo);

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.URL+'ezyCart/invoice/'+id);
      //  this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://staging.ezyretail.retailetics.com/ezyCart/invoice/'+id);
      //  this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://cloud.ezyretail.retailetics.com/ezyCart/invoice/RRTKM2309C92B5D');

    });




  }


  transactionDetailsBack(){
    this.location.back();

  }
  openSendInvoice(customerEmail: string, customerPhoneNo: string) {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];

      if (customerPhoneNo) {
        const dialogRef = this.dialog.open(SendInvoiceComponent, {
          disableClose: false,
          width: "600px",
          data: {
            id,  // Pass the id
            customerEmail,
            customerPhoneNo,
          }
        });
      } else {
        alert("fiiii");
        // Handle the case where customerEmail is not available
      }
    });
  }

  printSrc() {

    window.print();
  }
}
