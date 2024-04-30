import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/api.service';

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

@Component({
  // standalone: true,

  // imports: [ SharedModule],
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [style({ transform: 'translateX(100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(100%)' }))])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))])
    ])
  ]
})
export  class ViewFeedbackComponent implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ['cartId', 'appType', 'email', 'message', 'rating'];
  dataSource: MatTableDataSource<{}> = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  // data: any;
  data :any = {};
  filterText : string = '';

  totalLeanthFMlookup: any;
  page = 0;
  size = 10;
  pge = 1;
  nextbutton!: boolean;
  prevbutton!: boolean;


  pagedData!: any[];


  constructor(private apiService: ApiService,private router : Router, private formBuilder: FormBuilder, private dialog: MatDialog) {


   }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

    this.getFeedbackList();


  }









  getFeedbackList() {
    this.apiService.get('ezyRetail/feedback').subscribe((obj: any) => {
      if (obj) {
        this.data = obj;
        console.log(this.data);
        this.dataSource.data = obj;
        console.log(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    }, error => {
      console.log(error)
    })
  }


  refreshPage() {
    window.location.reload();
  }
  applyFilter(filterValue: any) {
    if(filterValue.value){
    let val = filterValue.value;
    val = val.trim(); // Remove whitespace
    val = val.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = val;}
  }

  

}
