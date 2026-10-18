import { Injectable } from '@angular/core';

@Injectable()
export class User {
  name = "USER";
  getPerson(){
    console.log("FROM USERS ",this.name);
    return this.name;
  }
}
