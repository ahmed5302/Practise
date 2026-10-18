import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Admin {
   name = "Ahmed";
  instanceId = Math.random().toString(36).substring(2,6);
  constructor(){
    // console.log(this.instanceId);
    
  }
}
