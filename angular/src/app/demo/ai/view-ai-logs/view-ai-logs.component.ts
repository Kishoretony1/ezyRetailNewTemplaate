import { Component, OnInit, ViewChild } from '@angular/core';
import { DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/api.service';
import {HttpClient} from '@angular/common/http';
import { Location } from '@angular/common';
// import { Angular2CsvService } from 'angular2-csv';

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
import moment from 'moment';

import { ShowAiresponseComponent } from '../show-airesponse/show-airesponse.component';
import { ShowImageComponent } from '../show-image/show-image.component';

@Component({
  selector: 'app-view-ai-logs',
  templateUrl: './view-ai-logs.component.html',
  styleUrls: ['./view-ai-logs.component.scss']
})
export class ViewAiLogsComponent implements OnInit
{
  options: any = {}; // customize options as needed
  selectedDate: string = "0";
  alwaysShowCalendars!: boolean;
  selected: any;
  selectedDateRange: string = 'Today'; // Default to 'Today'
  data!: [];

  id_user!: id_user;
  submitted = false;
  saveForm!: FormGroup;
  displayedColumns: string[] = ['cartId','barcode',  'ai_response_popup', 'productWeight', 'weighscaleWeight','images_popup','createdAt'
];

  ranges: any = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 3 Days': [moment().subtract(2, 'days'), moment()],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 14 Days': [moment().subtract(13, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],

  }
  dataSource: MatTableDataSource<{}> = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  filterText : string = '';
  constructor(public auth : AuthService, private formBuilder: FormBuilder, private dialog: MatDialog, private router: Router, private apiService: ApiService,public location : Location,) {

    this.alwaysShowCalendars = true;
    this.selected = [moment(), moment()];

  }


    ngOnInit(): void {
      this.id_user = this.apiService.getlocalstorageId();
      this.saveForm = this.formBuilder.group({
        days: new FormControl("0", [Validators.required]),
        fromDate: new FormControl({value:"", disabled : true}),
        toDate: new FormControl({value:"" , disabled : true}),
      });
      this.getAnalytics();
    }

    getAnalytics() {
      // Assuming you want to fetch data for the selected date range
      if (this.selected.startDate && this.selected.endDate) {
        const startDate = this.dateFormat(this.selected.startDate);
        const endDate = this.dateFormat(this.selected.endDate);
        this.getDashboardDataForDateRange(startDate, endDate);
      } else {
        // If you want to fetch data for a default date range, modify the startDate and endDate accordingly.
        const startDate = this.getDate(this.selectedDate); // Replace with your logic
        const endDate = this.getDate("0"); // Replace with your logic
        this.getDashboardDataForDateRange(startDate, endDate);
      }
    }
    getDate(dateCounts : string){
      let date = new Date();
      date.setDate(new Date().getDate()-Number(dateCounts));
      let getDate =  date.getUTCDate()  < 10 ? "0" + date.getUTCDate()   : date.getUTCDate();
      let getMonth = (date.getUTCMonth()+1) < 10 ? "0"+(date.getUTCMonth()+1) : (date.getUTCMonth()+1);
      let getYear = date.getUTCFullYear();
      return getYear+'-'+getMonth+'-'+getDate;
    }

    getDashboardDataForDateRange(startDate: string, endDate: string) {
      let queryParams: string = '';

      queryParams = queryParams + '&fromDate=' + startDate + '&toDate=' + endDate;
      queryParams = queryParams + '&merchantId=' + this.id_user.merchantId + '&outletId=' + this.id_user.outletId;

      this.apiService.get('ai/logs-store?'+ queryParams
        )
        .subscribe((obj: any) => {
          if (obj) {
            console.log(obj);
            this.data = obj;
            this.dataSource.data = obj;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
        },
        (error) => {
          console.log(error);
      }

        );
    }

    getTicketList(days: string) {
      let queryParams: string = '';

      if (days === 'custom') {
          queryParams = queryParams + '&fromDate=' + this.dateFormat(this.saveForm.value.fromDate) + '&toDate=' + this.dateFormat(this.saveForm.value.toDate);
      } else if (days !== '1' && days !== '' && !isNaN(parseInt(days))) {
          let today = new Date();
          let priorDate = new Date();
          priorDate.setDate(priorDate.getDate() - parseInt(days)); // Parse 'days' as an integer
          queryParams = queryParams + '&fromDate=' + this.dateFormat(priorDate) + '&toDate=' + this.dateFormat(today);
      }

      queryParams = queryParams + '&merchantId=' + this.id_user.merchantId + '&outletId=' + this.id_user.outletId;

      this.apiService.get('reports/sales/transactions?' + queryParams).subscribe(
          (obj: any) => {
              if (obj) {
                  console.log(obj);
                  this.data = obj.data;
                  this.dataSource.data = obj.data;
                  this.dataSource.paginator = this.paginator;
                  this.dataSource.sort = this.sort;
              }
          },
          (error) => {
              console.log(error);
          }
      );
  }
    // dateFormat(date: any) {
    //   let dateString = String(date);
    //   let datechange = new Date(dateString.replace('IST', ''));

    //   let day = datechange.getDate();
    //   let month = datechange.getMonth() + 1;
    //   let year = datechange.getFullYear();
    //   return year + "-" + (month > 9   ? month : "0"+month) + "-" + (day > 9   ? day : "0"+day);
    // }
    applyFilter(filterValue: any) {
      this.dataSource.filter = filterValue.value.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    // onSubmit(form: any) {
    //   this.submitted = true;
    //   if (form.invalid) {
    //   } else {
    //     this.getTicketList()
    //   }
    // }
    // onSubmitCustom(form: any) {
    //   this.submitted = true;
    //   if (form.value.days != 'custom'){
    //     this.getTicketList()
    //   }
    // }
    rangeSelection(event: any) {
      if (event.value && event.value == 'custom') {
        this.saveForm.controls['fromDate'].enable();
        this.saveForm.controls['toDate'].enable();
      }else{
        this.saveForm.controls['fromDate'].disable();
        this.saveForm.controls['toDate'].disable();
        this.saveForm.patchValue({fromDate : '', toDate:''})
      }
    }

    // downloadFile(url: string): void{
    //   const headers = new HttpHeaders({
    //     'Content-Type': 'application/pdf',
    //     Accept: 'application/pdf'
    //   });

    //   this.http.get(url, {
    //     headers,
    //     responseType: 'blob' as 'json' // Set the response type to blob
    //   }).subscribe((response: any) => {
    //     saveAs(response, 'downloaded_file.pdf'); // Save the response as a file
    //   });
    // }





    transactionDetails(row : any){
      localStorage.setItem('invoiceNum', row.invoiceNum);
      localStorage.setItem('qrCode', row.qrCode);
      localStorage.setItem('page', 'transactions');
      this.router.navigate(['dashboard/salesReport/transactionDetails']);
    }
    redeemPrivilege(row : any){
      const dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
        width: "auto",
        data: {
          type : 'warn',
          message: "Are you sure want to redeem Privilege?",
          btnYes: "Yes",
          btnNo : "No"
        }
      });
      dialogRef.afterClosed().subscribe(result=>{
        if(result == 'yes'){
      const dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
        width: "auto",
        data: {
          type : 'success',
          message: "Are you sure want to Redeem?",
          btnYes: true,
          btnNo: true      }
      });
      dialogRef.afterClosed().subscribe((data: any) => {
        if(data == 'yes'){
          this.apiService.put('cms/transactions/redeem-privilege/'+row.id,{"privilegeRedeemed": true}).subscribe((data:any)=>{
            if(data){

              this.ngOnInit();
            }
            },error => {

            });
      }
      })
    }
  }
      )}



      // test

      onDateRangeChange(selectedDateRange: [string, string]) {
        this.selected = selectedDateRange;
        console.log('selectedDateRange:', selectedDateRange);
        this.getAnalytics();
      }

      dateFormat(date: any) {
        // Format the date as needed (e.g., convert to YYYY-MM-DD format)
        // Update this part to match your date format
        let dateString = String(date);
        let datechange = new Date(dateString.replace('IST', ''));
        let day = datechange.getDate();
        let month = datechange.getMonth() + 1;
        let year = datechange.getFullYear();
        return year + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day);
      }
      refreshPage() {
        window.location.reload();
      }


      bytransactionBack(){
        this.location.back();

      }
      // downloadCsv() {
      //   var options = {
      //     title: 'Logs',
      //     encoding: 'utf8',
      //     fieldSeparator: ',',
      //     quoteStrings: '"',
      //     decimalseparator: '.',
      //     headers: ['Cart Id','Barcode',  'AI Response', 'Product Weight', 'Weighscale Weight','Date'],
      //     showTitle: true,
      //     useBom: true,
      //     removeNewLines: false,
      //     keys: []
      //   };
      //   new Angular2CsvService(this.currentData(), "Logs" + new Date().toLocaleString(), options);
      // }
      currentData() {
        const skip = this.paginator.pageSize * this.paginator.pageIndex;
        const pagedData = this.data.filter((u, i) => i >= skip);
       console.log(pagedData);
        const finaData: any[] = [];
        pagedData.forEach((element: any) => {
          let data: any = {};
          data.cartId = element.cartId || '' ;
          // data.type = element.type || '' ;
          // data.type = element.type || '' ;
          data.barcode = element.barcode || '' ;
          data.aiResponse = JSON.stringify(element.aiResponse) ||"" ;
          data.productWeight = element.productWeight || '' ;
          data.weighscaleWeight = element.weighscaleWeight || '' ;
          // data.message = element.message || '' ;
          data.createdAt = element.createdAt || '' ;
          finaData.push(data);
        });
        return finaData;
      }

      viewAiResponse(row : any){
        const dialogRef = this.dialog.open(ShowAiresponseComponent, {
          disableClose: false,
          width: "auto",
          data: row
        });
      }
      vieweditImg(row : any){
        const dialogRef = this.dialog.open(ShowImageComponent, {
          disableClose: false,
          width: "500px",
          data: row
        });
      }
}
