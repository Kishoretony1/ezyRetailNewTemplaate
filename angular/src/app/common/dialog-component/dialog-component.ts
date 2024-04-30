import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
    selector: 'app-dialog',
    templateUrl: './dialog-component.html',
    styleUrls: ['./dialog-component.css']
  })
export class DialogComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<DialogComponent>,  @Inject(MAT_DIALOG_DATA) public data: any ) {

      }
    ngOnInit(): void {

    }
    closeDialog(data : any){
      this.dialogRef.close(data);
    }
}