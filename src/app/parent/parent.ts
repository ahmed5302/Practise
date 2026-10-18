import { Component, Inject, inject, InjectionToken } from '@angular/core';
import { Child } from '../child/child';
import { Common } from '../common';
import { Admin } from '../admin';
// import { NgTemplateOutlet } from '../../../node_modules/@angular/common/common_module.d';
import { NgTemplateOutlet } from '@angular/common';

const API_URL = new InjectionToken<any>('API_URL');

@Component({
  selector: 'app-parent',
  imports: [Child, NgTemplateOutlet],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
  providers : [{provide : API_URL, useValue : 'https://api.example.com'}]
})
export class Parent {

  arr = [
    { 
      name : "Ahmed",
      role : "Admin"
    },
    { 
      name : "Mansoor",
      role : "User"
    },
    { 
      name : "Ali",
      role : "Consumer"
    }
  ]
  // constructor( private com : Common){
  //    const user = this.com;
  //   user.name = "mansoor";
  //   console.log(this.com.name);
  // }
  constructor( @Inject(API_URL) private api : string){
  }

  user = inject(Common);
  getInst(){
    console.log(this.user.instanceId);
  }

  ngOnInit(){
    console.log(this.user.instanceId);
    console.log(this.api);
  }
  
}
