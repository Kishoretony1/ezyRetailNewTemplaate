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
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-trolly-number',
  templateUrl: './view-trolly-number.component.html',
  styleUrls: ['./view-trolly-number.component.scss']
})
export class ViewTrollyNumberComponent implements OnInit, OnDestroy
 {

  elementType : any;
  details : any = {};
  cartDeatils:any={};
  // docRef: any;
  nativeElement:any;
  intervalcall : any;
  page : any;
  // row:any
  routeLink : any;
  userDetails : any;
  outletName : any;
  constructor(public location : Location,private sanitizer: DomSanitizer,public auth : AuthService, private router : Router, private  apiService: ApiService,private dialog: MatDialog) {

  this.page = localStorage.getItem('page');
  this.userDetails = this.auth.getUserDetails();
  this.outletName = this.auth.getOutletName();
  }

  ngOnInit(): void {
    this.getDetails();
  }


  getDetails(){

    this.apiService.get('v1/ezyCart/cart/trolley/'+localStorage.getItem('trollyNo')).subscribe((obj: any) => {

      if (obj) {
        this.details = obj;


        console.log(this.details);


      }
    }, error => {
      console.log(error)

    })
  }

  byTrollyBack(){
    this.router.navigate(['dashboard/devices/view_ezyCart']);

  }

  ngOnDestroy() {
    localStorage.removeItem('trollyNo');
    // localStorage.removeItem('invoiceNum');
    // localStorage.removeItem('page');
    clearInterval(this.intervalcall);
  }

}
