import { Component, inject } from '@angular/core';
import { GenericList } from '../generic-list/generic-list';
import { CustomDirective } from '../custom-directive';
import { Parent } from '../parent/parent';
import { Common } from '../common';
import { RouteService } from '../route-service';
import { NgEventBus } from 'ng-event-bus';
import { Subscription } from 'rxjs';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-profile-page',
  imports: [GenericList,CustomDirective, Parent],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
  providers:[Common,RouteService]
})
export class ProfilePage {
 ngbus = inject(NgEventBus);
 ngBusdata:any;
  routeService = inject(RouteService);

  sub! : Subscription;
  ngOnInit(){
    // this.routeService.item = "PROFILE PAGE";
    // console.log("PROFILE PAGE ",this.routeService.item);
this.sub = this.ngbus.on('message:personal').subscribe( val =>{
  this.ngBusdata = val.data;
  console.log("NGBUS PERSONAL",val);
});
this.ngbus.on('message:**').subscribe( val =>{
  console.log("NGBUS VEHICLE",val);
});
  }
  btn = "BTN"
users: User[] = [
    { name: 'Ahmed', email: 'ahmed@example.com' },
    { name: 'Priya', email: 'priya@example.com' },
    { name: 'Karthik', email: 'karthik@example.com' }
  ];

ngOnDestroy(){
  this.sub.unsubscribe();
}
}
