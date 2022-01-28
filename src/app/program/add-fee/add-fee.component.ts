import { Component, OnInit,Inject,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { SharedService } from "../shared.service";


// export interface DialogData{
//   Intake: string,
//   Region: string,
//   FeeType: string,
//   FeeBasis: string,
//   FeeAmount: number,
//   Deadline: number,
//   TAT:string
// }




@Component({
  selector: 'app-add-fee',
  templateUrl: './add-fee.component.html',
  styleUrls: ['./add-fee.component.css']
})
export class AddFeeComponent implements OnInit {

  intake: FormControl = new FormControl('');
  region: FormControl = new FormControl('');
  type: FormControl = new FormControl(''); 
  basis: FormControl = new FormControl('');
  amount: FormControl = new FormControl('');
  deadline: FormControl = new FormControl('');
  tat: FormControl = new FormControl('');

  form:FormGroup;
  formdata: any;

  dataSource=[
    {intake:"A04",region:"India",type:"Online",basis:"HalfPay",amount:50000,deadline:18-1-2022,tat:"Thirty"},
    {intake:"A05",region:"India",type:"Offline",basis:"FullPay",amount:30000,deadline:21-1-2022,tat:"ThirtyFive"},
    {intake:"A06",region:"India",type:"Online",basis:"FullPay",amount:90000,deadline:20-1-2022,tat:"ThirtySix"}
  ];
 
  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA)public data:any,
    private sharedService:SharedService,public _service:DataService) {
      // _service.setOption(this.formdata)
    }

    

  ngOnInit(): void {

   }



   model:any={}
   
   onSubmit(val){
     console.log(val),
     this.formdata=val
     console.log("form data" +this.formdata)
     this._service.setOption(this.model)
     
    //  const mapped = Object.entries(this.model).map(([type, value]) => ({type, value}));
     
    // console.log("model",this.model);

    console.log("Service data passed model ",this.model)

    // this.dataSource.push(this.model)
  }

 

 


}
