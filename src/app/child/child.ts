import { Component, ContentChild, ElementRef, inject, Input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Common } from '../common';
import { Admin } from '../admin';

@Component({
  selector: 'app-child',
  imports: [NgTemplateOutlet],
  templateUrl: './child.html',
  styleUrl: './child.css',
  providers : [{provide : Common, useClass : Common}]
})
export class Child {

  @Input() userArr:any;
  data ={
    name:"Ahmed"
  }
  @ContentChild('temp') temp!:TemplateRef<any>;

  // constructor( private com : Common){
  //   const user = this.com;
    
  //   console.log(user.name);
  //  }
   user = inject(Common);
  getInst(){
    console.log(this.user.instanceId);
    
  }
  ngOnInit(){
    console.log(this.user.instanceId);
  }
}
