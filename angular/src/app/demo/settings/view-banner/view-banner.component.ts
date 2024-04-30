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
import { id_user } from '../../dashboard/view/tableData';
import { MatDialog } from '@angular/material/dialog';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-view-banner',
  templateUrl: './view-banner.component.html',
  styleUrls: ['./view-banner.component.scss'],
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

export  class ViewBannerComponent implements OnInit, AfterViewInit
{
  data: any;

  shouldHideDiv=false;
  isEditSectionVisible = false;
  saveForm: any;
  saveAddForm!: FormGroup;
  dataSource : any;


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

  constructor(private apiService: ApiService,private router : Router, private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.saveForm = this.formBuilder.group({
      banner: [{ value: '', disabled: true }, Validators.required],
      position: [{ value: '', disabled: true }, Validators.required], // Initialize each form control with an initial value
      type: [{ value: '', disabled: true }, Validators.required],
      aisle: [{ value: '', disabled: true }, Validators.required],
      beacon: [{ value: '', disabled: true }, Validators.required],
      zoneName: [{ value: '', disabled: true }, Validators.required],


      // Add other form controls with their initial values
    });

   }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.getZoneeList();
    let id : id_user =  this.apiService.getlocalstorageId();
    this.saveAddForm = this.formBuilder.group({
      banner: [''],
      position:['', Validators.required],
      type:new FormControl("0", [Validators.required]),
      aisle: [''],
      beacon: [''],
      outletId: [id.outletId, Validators.required],
      merchantId: [id.merchantId, Validators.required],
    });

    this.loadZones();
  }
  addZone(){
    this.visibleAddSection = !this.visibleEditSection



  }

  onTypeChange(event: any): void {
    const selectedValue = event.target.value;

    // Check the selected value and update the visibility accordingly
    if (selectedValue === '0') {
      this.isDivVisible = false;
    } else if (selectedValue === '1') {
      this.isDivVisible = true;
    }
  }
  loadZones(){


    let id_user : id_user = this.apiService.getlocalstorageId();
    this.apiService.get('cms/zones?merchantId='+id_user.merchantId+'&outletId='+id_user.outletId).subscribe((result:any)=>{
    this.zones=result.data;
    console.log(this.zones);

    });

  }
  getBeaconById(event: any): void {
    const selectedValue = event.target.value;
    console.log('Selected value:', selectedValue);

    this.apiService.get('cms/zone/' + selectedValue).subscribe((result: any) => {
      this.beacons = result.data;
      console.log(this.beacons);
      if(this.beacons[0].beacons[0]==null){
        this.shouldHideDiv = true;
      }
      else{
        this.shouldHideDiv = false;
      }
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
      let id_user: id_user = this.apiService.getlocalstorageId();
      let formData = new FormData();
      formData.append('merchantId', String(id_user.merchantId));
      formData.append('outletId', String(id_user.outletId));
      formData.append('position', String(this.saveAddForm.value.position));
      formData.append('type', String(this.saveAddForm.value.type));
      formData.append('aisle', String(this.saveAddForm.value.aisle));
      formData.append('beacon', String(this.saveAddForm.value.beacon));
      formData.append("banner", this.attachfile);
      this.apiService.post('cms/banner', formData).subscribe((data: any) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
        width: "300px",
        data: {
          type : 'success',
          message: this.saveAddForm.value.zoneName+" created successfully",
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


  // for edit section

  editZone(row : any){
    this.visibleEditSection = !this.visibleEditSection
    localStorage.setItem('zone' , JSON.stringify(row));
    // this.router.navigate(['/dashboard/zones-beacons/edit']);

    this.value = row;

    // Use patchValue to populate the form fields with the selected brand's data
    this.saveForm.patchValue({
      zoneName: row.zoneName,
      zoneType: row.zoneType,

      // ... Other form fields
    });
    this.saveForm.enable();
  }

  onSubmit(form : any){
    this.submitted = true;
    let id_user: id_user = this.apiService.getlocalstorageId();

    let formData = new FormData();
      formData.append('merchantId', String(id_user.merchantId));
      formData.append('outletId', String(id_user.outletId));
      formData.append('type', String(form.value.type));
      formData.append('position', String(form.value.position));
      formData.append('aisle', String(form.value.aisle));
      formData.append('beacon',String(form.value.beacon));
      formData.append("banner", this.attachfile);
      this.apiService.put('cms/banners/'+this.value.bannerId, formData).subscribe((obj: any) => {

      const dialogRef = this.dialog.open(DialogComponent, {
        disableClose: false,
        width: "300px",
        data: {
          type : 'success',
          message: this.saveAddForm.value.zoneName+" updated successfully",
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
  getZoneeList() {
    let id_user: id_user = this.apiService.getlocalstorageId();
    this.apiService.get("cms/banners?merchantId="+id_user.merchantId+"&outletId="+id_user.outletId)
      .subscribe({
        next:(res:any)=>{
        this.data = res.data
        console.log(this.data);

          // this.dataSource = new MatTableDataSource(this.data);
          // console.log(this.dataSource);
        },
         error: (err:any) => {
        console.log(err);
      }

  });
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


}

