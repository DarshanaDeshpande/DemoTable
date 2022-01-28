import { Injectable } from '@angular/core';


export class Data {
  intake: string ;
  region: string ;
  type: string ;
  basis: string ;
  amount: number ;
  deadline: number ;
  tat:string;
}

// let datas: Data[]=[{
//   "Intake": "New",
//   "Region": "Pune",
//   "FeeType": "Online",
//   "FeeBasis": "1000",
//   "FeeAmount": 30000,
//   "Deadline": 10,
//   "TAT":"half",
// }]

// model:any={}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  // datas:Data[]=[]
 datas:Data[] =[
    {"intake":"A01","region":"India","type":"Online","basis":"HalfPay","amount":50000,"deadline":18012022,"tat":"Thirty"},
    {"intake":"A02","region":"India","type":"Offline","basis":"FullPay","amount":30000,"deadline":2112022,"tat":"ThirtyFive"},
    {"intake":"A03","region":"India","type":"Online","basis":"FullPay","amount":90000,"deadline":2012022,"tat":"ThirtySix"}
  ];

  getDatas() {
    return this.datas; 
  }

  public data:any=[];  
  
  setOption(value) {      
     this.data = value;  
     console.log("set",this.data);
    this.datas.push(this.data)
    console.log("set",this.datas);

   }

  //  getOption() {  
  //     this.data;
  //    console.log("Get",this.data)  
  //  }  


 

  constructor() { }

  model:any={}

}
