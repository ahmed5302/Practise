import { Injectable } from '@angular/core';

@Injectable()
export class RouteService {

  text = "ROUTE SERVICE VALUE";
  getItem(){
    return this.text;
  }
  setItem(value: string){
    this.text = this.text +  value;
    return this.text; 
  }
}
