import { Component, Input, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AddFeeComponent } from '../add-fee/add-fee.component';
import { DataService , Data} from "../data.service";
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-show-fee',
  templateUrl: './show-fee.component.html',
  styleUrls: ['./show-fee.component.css'],
  providers:[DataService]
})
export class ShowFeeComponent implements OnInit {


  columns:any[]=[
    { dataField:'intake', title:'Intake', type:'', format:''  ,  allowFixing:true},
    { dataField:'region', title:'Region', type:'', format:'' },
    { dataField:'type', title:'Type', type:'', format:'' },
    { dataField:'basis', title:'Basis', type:'', format:'' },
    { dataField:'amount', title:'Amount', type:'', format:'' },
    { dataField:'deadline', title:'Deadline', type:'date' },
    { dataField:'tat', title:'TAT', type:'', format:'' },
  ];
  
  dataSource: Data[];


  constructor(public dialog:MatDialog,public service:DataService) {

    // this.dataSource=this.service.getDatas();

      console.log(" Get DataSource",this.dataSource)

    }


  openDialog(){

    const dialogRef = this.dialog.open(AddFeeComponent, {
      width: '550px',
    
    });
  

  }

  ngOnInit(){
    console.log(this.service.datas)
    this.dataSource=this.service.getDatas();
    // this.dataSource = this.service.datas;
    console.log('ngonit',this.dataSource)
  }

  // getOptions(): void {
  //   this.dataSource = this.service.getOption();
  // }

 }
  



