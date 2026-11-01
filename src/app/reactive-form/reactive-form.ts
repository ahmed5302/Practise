import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators, } from '@angular/forms';
import { NgEventBus } from 'ng-event-bus';
import { Subject } from 'rxjs';
import { ProfilePage } from '../profile-page/profile-page';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { SharedNative } from 'shared-native';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, ProfilePage],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userForm!: FormGroup;


  fb = inject(FormBuilder);
  ngbus= inject(NgEventBus);
  route = inject(ActivatedRoute);
  router = inject(Router);
  shared = inject(SharedNative);

  ngOnInit() {
    const sub = new Subject();
    sub.subscribe((val)=> console.log(val)
    );

    sub.next("Ahmed");
    sub.next("Mansoor");


    const pro = new Promise((resolve)=>{
      setTimeout( ()=>{
        resolve('Promoses')
      },1000);
    });
    pro.then( (val)=> console.log(val));


    this.userForm = this.fb.group({
      mobile:[''],
      home:[''],
      users: this.fb.array([this.createUser()])
    });

    this.userForm.valueChanges.subscribe((item) => {
      console.log(item);

    });
  }

  // one row = one FormGroup with firstName + lastName
  createUser(): FormGroup {
    return this.fb.group(
      {
        firstName: ['', [Validators.minLength(3), this.customValidators]],
        lastName: ['']
      },
      { validators: this.firstOrLastNameRequired }
    );
  }

  // group-level validator: at least one of firstName / lastName must be filled
  firstOrLastNameRequired(group: AbstractControl): ValidationErrors | null {
    const first = (group.get('firstName')?.value ?? '').trim();
    const last = (group.get('lastName')?.value ?? '').trim();
    return first || last ? null : { nameRequired: true };
  }

  users() {
    console.log("FORM ARRAY ",this.userForm.get('users'));
    console.log("FORM ARRAY ",this.userForm.get('users') as FormArray);
    return this.userForm.get('users') as FormArray;
  }

  addUser() {
    this.users().push(this.createUser());
  }

  removeUser(index: number) {
    this.users().removeAt(index);
  }

  customValidators(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    return val && val.includes(' ') ? { 'space': true } : null;
  }

  submitForm() {
    console.log(this.userForm.value);
  }

  ngBusData(){
    this.ngbus.cast('message:personal',{name :"Ahmed",age :30});
    this.ngbus.cast('message:land',{name :"Down",area :40});
    this.ngbus.cast('message:vehicle',{name :"xyz",age :50});
     this.ngbus.cast('message:house:square',{name :"xyz",age :50});

  }
  passRemoteData(){
    this.router.navigate(['/remote'],
      
    //   {
    //   queryParams :{name :"Ahmed"}
    // }
  )
  // .then( ()=>window.dispatchEvent(new CustomEvent('custom',{detail  :"Mansoor"})) ); 

  this.shared.setSub("Name Changed to Mansoor");
  }



}
