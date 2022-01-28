// core module
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {

  userForm :FormGroup;
  listData:any;

  constructor(private fb:FormBuilder){
  
    this.listData=[];
  
    this.userForm = this.fb.group({
      invoiceid: [null,[Validators.required]],
      partyname: [null,[Validators.required]],
      amount:[null,[Validators.required]],
      invoicedate:[null,[Validators.required]],
    })
  }

  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }


  // public updateItem(){
  //   this.listData.filter(this.userForm.value);
  // }
  public reset(){
    this.userForm.reset();
  }

  public removeItem(element){
    this.listData.forEach((value,index)=>{
      if(value ==element)
      this.listData.splice(index,1);
    });
  }



  ngOnInit() {
  }

  }
