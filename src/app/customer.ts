import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  name = "CUSTOMER";
  getPerson(){
    console.log("FROM CUSTOMERS ",this.name);
    return this.name
  }
}
