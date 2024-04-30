import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/api.service';
import { ComponentLoaderService } from 'src/app/common/component-loader.service';
import { DialogComponent } from 'src/app/common/dialog-component/dialog-component';
import {tableData, id_user} from './tableData';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['employeeName', 'employeePin' , 'employeeDepartment', 'employeePosition', 'employeeType', 'email', 'phoneNum', 'action'];
  dataSource : any;
  data : tableData[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private loader : ComponentLoaderService, private _snackBar: MatSnackBar, private apiService: ApiService, private router : Router, private dialog: MatDialog) { 
    this.loader.display(true); }

  ngOnInit(): void {
    this.loader.display(true);
   this.getEmployeeList();
  }
  ngAfterViewInit() {
  }
  sorting(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEmployeeList(){
    let id_user : id_user = this.apiService.getlocalstorageId();
    this.apiService.get('ezycart/cs/employees?'+ 'merchatId='+id_user.merchantId+'&outletId='+id_user.outletId).subscribe((obj: any) => {
      if (obj) {
        // obj = JSON.parse(obj);
        this.data = obj.data
        this.dataSource = new MatTableDataSource(this.data);
        this.sorting();
        this.loader.display(false);
      }
    }, error => {
      console.log(error)
      this.loader.display(false);
    })
  }
  editEmployee(row : {}){
  localStorage.setItem('employeeData', JSON.stringify(row));
  this.router.navigateByUrl('Employees/edit');

  }
  deleteEmployee(row : any){
    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false,
      width: "auto",
      data: {
        type : 'warn',
        message: "Are you sure want to delete " + row.employeeName + '?',
        btnYes: "Yes",
        btnNo : "No"
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result == 'yes'){
        this.apiService.delete('ezyCart/cs/employee/'+row.id).subscribe((obj  : any) => {
          const dialogRef = this.dialog.open(DialogComponent, {
            disableClose: false,
            width: "auto",
            data: {
              type : 'success',
              message: row.employeeName+" deleted Successfully",
              btnClose: "Ok"
            }
          });
          dialogRef.afterClosed().subscribe((data:any)=>{
            this.ngOnInit();
          })
        }, error => {
          console.log(error)
          this._snackBar.open(error.message, 'close',{
            duration: 3000
          });
        });
      }
    })

}
}
