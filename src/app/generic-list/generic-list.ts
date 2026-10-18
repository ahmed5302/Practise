import { CommonModule } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CustomDirective } from '../custom-directive';

@Component({
  selector: 'app-generic-list',
  imports: [CommonModule, CustomDirective],
  templateUrl: './generic-list.html',
  styleUrl: './generic-list.css',
})
export class GenericList {
  btn = "CHANGED"
@Input() items!: any[];
@ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;
fromProfile(){
  console.log("FROM PROFILE");
   
}
}


