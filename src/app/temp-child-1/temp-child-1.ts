import { Component, inject } from '@angular/core';
import { RouteService } from '../route-service';
import { Rxjs } from '../rxjs/rxjs';

@Component({
  selector: 'app-temp-child-1',
  imports: [Rxjs],
  providers: [RouteService],
  templateUrl: './temp-child-1.html',
  styleUrl: './temp-child-1.css',
})
export class TempChild1 {
  servise = inject(RouteService);

  ngOnInit(){
    console.log("TempChild1 service item value is : ",this.servise?.getItem());
  }
}
