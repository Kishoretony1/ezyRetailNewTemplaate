import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/api.service';
import {HttpClient} from '@angular/common/http';

import { AuthService } from '../../../common/auth.service';
// import { ModalPopupComponent } from '../modal-popup/modal-popup.component';
import { animate,state, style, transition, trigger } from '@angular/animations';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/common/dialog-component/dialog-component';

import { beacon_List,id_user } from '../../dashboard/view/tableData';
import { MatDialog } from '@angular/material/dialog';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
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
export class PaymentMethodsComponent implements OnInit, AfterViewInit
{
  displayedColumns: string[] = ['sno','paymentId','optionId', 'type','code','name','status', 'action'];
  dataSource: MatTableDataSource<{}> = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  // data: any;
  data :any = {};
  filterText : string = '';
  dropdownOptions: string[] = [];
  totalLeanthFMlookup: any;
  // optionTypes: any[]=[];
  page = 0;
  size = 10;
  pge = 1;
  nextbutton!: boolean;
  prevbutton!: boolean;

  optionTypes!: any[];

  pagedData!: any[];

  shouldHideDiv=false;
  isEditSectionVisible = false;
  saveForm: any;
  saveAddForm!: FormGroup;
  selectedLevel:string='';
  selectedIsSubscribed:string='';

  selectedImageSrc: string | ArrayBuffer | null | undefined;

  isEditing!: boolean;
  visibleEditSection!: boolean;
  visibleAddSection!: boolean;
  chatMessage!: boolean;
  value: any;
  zoneTypes: any = [];
  submitted!: boolean;
  messages: any;
  attachfile: any;
  typeshouldHideDiv=false;
  zoneId:string='';

  zones:any[]=[];
  isDivVisible: boolean = false;
  beacons:any[]=[];


  constructor(private apiService: ApiService,private router : Router, private formBuilder: FormBuilder, private dialog: MatDialog,private http:HttpClient) {
    this.saveForm = this.formBuilder.group({
      paymentId: [{ value: '',  }, Validators.required],
      optionId: [{ value: '',  }, Validators.required],
      type: [{ value: '',  }, Validators.required],
      code: [{ value: '',  }, Validators.required],
      name: [{ value: '',  }, Validators.required],
      status: [{ value: '',  }, Validators.required],
    });

   }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

    this.getPaymentMethodsList();
    const reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
    this.saveAddForm=this.formBuilder.group({
      paymentId: ['', Validators.required],
      optionId: [''],
      type:['',Validators.required],
      code:['',Validators.required],
      name:['',Validators.required],
      status:['',Validators.required]




    });

    this.extractDropdownOptions();
    this.getOptionId();


  }

  getOptionId()
  {

    this.apiService.get('ezyCart/paymentoption').subscribe((result:any)=>{
      this.optionTypes=result;
      console.log(this.optionTypes);

    });
  }

  addAdvertisement(){
    this.visibleAddSection = !this.visibleEditSection



  }
  getBrandName()
  {

    this.http.get('https://api.ezylist.retailetics.com/brands').subscribe((result:any)=>{
      // this.data = result.data;

      this.optionTypes=result.data;
      console.log(this.optionTypes);

    });
  }
  applyFilter1() {
    // Check if the selected level is "Reset"
    if (this.selectedLevel === '4') {
      // If "Reset" is selected, clear the filter
      this.dataSource.filter = '';
    } else {
      // If any other option is selected, apply the filter
      this.dataSource.filter = this.selectedLevel.trim().toLowerCase();
    }

    // console.log(this.selectedLevel.trim().toLowerCase());
  }

  applyFilter2(){
    // Check if the selected level is "Reset"
    if (this.selectedLevel === '4') {
      // If "Reset" is selected, clear the filter
      this.dataSource.filter = '';
    }
    else{
      this.dataSource.filter = this.selectedIsSubscribed.trim();
    }

    // console.log( this.selectedIsSubscribed.trim().toLowerCase());
  }

  loadZones(){


    let id_user : id_user = this.apiService.getlocalstorageId();
    this.apiService.get('cms/zones?merchantId='+id_user.merchantId+'&outletId='+id_user.outletId).subscribe((result:any)=>{
    this.zones=result.data;
    console.log(this.zones);

    });

  }



  onAddSubmit(form : any){
    this.submitted = true;
     if(form.invalid){
       const dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
        width: "300px",
        data: {
          type : 'warn',
          message: "Please fill all the mandatory fields",
          btnClose: "OK"
        }
      });
     }else{
      let obct={
        payment_id: form.value.paymentId,
        option_id:form.value.optionId,
        type: form.value.type,
        code: form.value.code,
        name: form.value.name,
        status: form.value.status,

    }

     this.apiService.post('ezyCart/paymentmethod',obct).subscribe((obj  : any) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
        width: "auto",
        data: {
          type : 'success',
          // message: this.saveForm.value.serialNumber+" created successfully",
          message: "Payment Method created successfully",
          btnClose: "OK"
        }
      });
      dialogRef.afterClosed().subscribe(date => {
        console.log('The dialog was closed');
        // Reload the page or navigate to the current route
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);        });
    }, error => {


    })
    }
  }


  extractDropdownOptions() {
    this.dropdownOptions = this.displayedColumns;
  }

  // for edit section

  editPaymentOption(row : any){
    this.visibleEditSection = !this.visibleEditSection
    localStorage.setItem('zone' , JSON.stringify(row));
    // this.router.navigate(['/dashboard/zones-beacons/edit']);

    this.value = row;

    // Use patchValue to populate the form fields with the selected brand's data
    this.saveForm.patchValue({
      paymentId: row.paymentId,
      optionId: row.optionId,
      type: row.type,
      code: row.code,
      name: row.name,
      status: row.status,

      // ... Other form fields
    });
    this.saveForm.enable();
  }

  onSubmit(form : any){


    this.submitted = true;
    let id_user: id_user = this.apiService.getlocalstorageId();
    let formValue = this.saveForm.value;
    let obct={

      payment_id: form.value.paymentId,
      option_id:form.value.optionId,
      type: form.value.type,
      code: form.value.code,
      name: form.value.name,
      status: form.value.status,

  }

     this.apiService.put('ezyCart/paymentmethod'+'?id='+this.value.id,obct).subscribe((obj  : any)   => {

      const dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
        width: "300px",
        data: {
          type : 'success',
          message: "Payment Method updated successfully",
          btnClose: "OK"
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Reload the page or navigate to the current route
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);
      });
      // this.router.navigateByUrl('/dashboard/zones-beacons/view');

    });

      }


  formData(arg0: string, formData: any) {
    throw new Error('Method not implemented.');
  }
  onSelectFile(event: any) {
    // let file = event.target.files[0];
    // this.attachfile = file;
    let file = event.target.files[0];
    let reader = new FileReader();
    const img = new Image();
    reader.readAsDataURL(file); // read file as data url
    img.src = window.URL.createObjectURL(file);
    reader.onload = () => {
      setTimeout(() => {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        window.URL.revokeObjectURL(img.src);
        console.log(width, height);

          // Set theFile property
          this.attachfile = event.target.files[0];
          this.messages = [];


      },1000);

    }
  }









  getPaymentMethodsList() {
    let id_user : id_user = this.apiService.getlocalstorageId();
    this.apiService.get('ezyCart/paymentmethod').subscribe((obj: any) => {
      if (obj) {
        this.data = obj;
        console.log(this.data);
        this.dataSource.data = obj;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;


      }
    }, error => {
      console.log(error)
    })
  }

  beaconsList(row : any){
    localStorage.setItem('bannerId', row.bannerId);
     this.router.navigate(['/Zones/beacons']);
   }
  closeChatBox() {
    this.visibleEditSection = false;

  }
  closeAddChatBox() {
    this.visibleAddSection = false;

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
  deletePaymentOption(row : any)
  {

    const dialogRef = this.dialog.open(DialogComponent, {
      disableClose: false,
      width: "300px",
      data: {
        type : 'warn',
        message: "Are you sure want to delete ",
        btnYes: "Yes",
        btnNo : "No"
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result == 'yes'){
        let id_user : id_user = this.apiService.getlocalstorageId();
    this.apiService.delete('cms/module/'+row.id).subscribe((obj: any) =>{
          const dialogRef = this.dialog.open(DialogComponent, {
            disableClose: false,
            width: "300px",
            data: {
              type : 'success',
              message: 'Module deleted Successfully',
              btnClose: "Ok"
            }
          });
          dialogRef.afterClosed().subscribe((data:any)=>{
            this.ngOnInit();
          })
        }, error => {
          console.log(error)

        });
      }
    })


  }
}
