import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators, } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userForm!: FormGroup;


  fb = inject(FormBuilder);

  ngOnInit() {
    this.userForm = this.fb.group({
      users: this.fb.array([
        this.fb.group({
          firstName: ['', [Validators.required, Validators.minLength(3), this.customValidators]],
          lastName: ['', [Validators.required]]
        })
      ])
    });

    this.userForm.valueChanges.subscribe((item) => {
      console.log(item);

    });
  }

  // one row = one FormGroup with firstName + lastName
  createUser(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), this.customValidators]],
      lastName: ['', [Validators.required]]
    });
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


}
