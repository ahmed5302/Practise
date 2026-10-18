import { Component, inject } from '@angular/core';
import { GenericList } from '../generic-list/generic-list';
import { CustomDirective } from '../custom-directive';
import { Parent } from '../parent/parent';
import { Common } from '../common';
import { RouteService } from '../route-service';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-profile-page',
  imports: [GenericList,CustomDirective, Parent],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
  providers:[Common]
})
export class ProfilePage {

  routeService = inject(RouteService);
  ngOnInit(){
    // this.routeService.item = "PROFILE PAGE";
    // console.log("PROFILE PAGE ",this.routeService.item);
  }
  btn = "BTN"
users: User[] = [
    { name: 'Ahmed', email: 'ahmed@example.com' },
    { name: 'Priya', email: 'priya@example.com' },
    { name: 'Karthik', email: 'karthik@example.com' }
  ];
}
