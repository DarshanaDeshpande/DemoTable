import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private subject =new Subject<FormData[]>();

 
  sendClickEvent(formdata:FormData[]){
    this.subject.next(formdata);
    console.log('data in send click'+ formdata)
  }

  getClickEvent():Observable<FormData[]>{
    return this.subject.asObservable();
  }
  constructor() { }
}
