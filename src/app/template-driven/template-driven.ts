import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {
  firstName : string = '';
  lastName : string = '';


  onSubmit(temp:NgForm){
    console.log("TEMPLATE DRIVEN ", temp.value);
    temp.resetForm();
  }
}
