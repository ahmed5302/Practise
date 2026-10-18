import { Component, Inject } from '@angular/core';
import { User } from '../user';
import { Customer } from '../customer';
import { API_URL } from '../tokens';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
  providers:[{ provide : User, useExisting : Customer}]
})
export class Product {

  constructor( private user : User, private cus : Customer, @Inject(API_URL) private apiUrl: string){
    console.log(this.user === this.cus);
    console.log(this.cus.getPerson());
    console.log(this.user.getPerson()); 
    console.log(this.apiUrl);
    
  }
}
