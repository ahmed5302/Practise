import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomDirective } from '../custom-directive';
import { RouterOutlet } from '@angular/router';
import { RouteService } from '../route-service';
import { TempChild1 } from '../temp-child-1/temp-child-1';

@Component({
  selector: 'app-temp-driven',
  imports: [FormsModule, CommonModule, CustomDirective, RouterOutlet,TempChild1],
  viewProviders: [RouteService],   // visible to @Host lookups from children in this template
  templateUrl: './temp-driven.html',
  styleUrl: './temp-driven.css',
})
export class TempDriven {
  model ={
    fullName : '',
    address : {
      city : '',
      zip :''
    }
  }

 @ViewChild( 'profileForm') profileForm! : NgForm;
  onSubmit(form:NgForm){
    console.log(form.value);
        console.log(form.value);
    console.log(form.valid);
    
  }
 
  ngAfterViewInit(){
    this.profileForm.form.valueChanges.subscribe( item =>{
      console.log("VV ",item);
      
    });
  }

}
