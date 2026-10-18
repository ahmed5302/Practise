import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class Common {
  // public getUser(){
  //   return { name :"Ahmed"}
  // }
  name = "Ahmed";
  instanceId = Math.random().toString(36).substring(2,6);
  constructor( private http : HttpClient){
    // console.log(this.instanceId);
    
  }

  sub = new Subject<any>();
  obs = this.sub.asObservable();

  setVal(arg:any){
    this.sub.next(arg);
  }

  getUser():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
