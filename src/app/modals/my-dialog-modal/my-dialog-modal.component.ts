import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog-modal',
  templateUrl: './my-dialog-modal.component.html',
  styleUrls: ['./my-dialog-modal.component.css']
})
export class MyDialogModalComponent implements OnInit {


  fromintake: string;
  fromDialogintake: string;

  constructor(public dialogRef: MatDialogRef<MyDialogModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.fromintake = data.pageintake;
     }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close({ event: 'close', data: this.fromDialogintake });
  }
}
