import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogModalComponent } from '../my-dialog-modal/my-dialog-modal.component';
//show fee
@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {

  // dialogValue: string;
  // sendValue: string;
  
  dialogintake:string;
  sendintake:string;

  columns:any[]=[
    { dataField:'Intake', title:'Intake', type:'', format:''  ,  allowFixing:true},
    { dataField:'Region', title:'Region', type:'', format:'' },
    { dataField:'FeeType', title:'Type', type:'', format:'' },
    { dataField:'FeeBasis', title:'Basis', type:'', format:'' },
    { dataField:'FeeAmount', title:'Amount', type:'', format:'' },
    { dataField:'Deadline', title:'Deadline', type:'date', format:'dd MMM yyyy' },
    { dataField:'TAT', title:'TAT', type:'', format:'' },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogModalComponent, {
      width: '250px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: { intake: this.sendintake }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogintake = result.data;
    });
  }
}
