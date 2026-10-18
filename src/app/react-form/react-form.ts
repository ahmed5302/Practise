import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-react-form',
  imports: [ReactiveFormsModule,RouterLink],
  providers : [],
  templateUrl: './react-form.html',
  styleUrl: './react-form.css',
})
export class ReactForm {
  test = "test;"
  private fb = inject(FormBuilder);
constructor( private route : ActivatedRoute, private router : Router , private http : HttpClient){}

private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
ngOnInit(){
    // const obs = this.http.get(this.baseUrl);
    // obs.subscribe( item =>{
    //   console.log(item);
      
    // });
//  let rP =  this.route.snapshot.paramMap.get('id');
//  console.log(rP);
//  this.route.paramMap.subscribe( i => console.log(i)
//  );

this.router.events.subscribe( e =>{
  if( e instanceof NavigationStart){

  } 
});
 this.route.queryParamMap.subscribe(item =>{
  console.log(item.get('name'));
  
 });
 this.route.data.subscribe( item =>{
  console.log("ITEM ",item);
  
 });
}
  // FORM GROUP
  // userFormGroup = new FormGroup({
  //   firstName : new FormControl(''),
  //   lastName : new FormControl(''),
  // });


  //Form Builder
    userFormGroup = this.fb.group({
      personal : this.fb.array([])
      // personal : this.fb.array([
      //   this.fb.control('')
      // ])
      // personal: this.fb.group({
      //       firstName: ['',[Validators.required,Validators.minLength(6)]],
      //     lastName: ['',[Validators.required,this.customValidation ]]
      // }),
      // location : this.fb.group({
      //   pincode :[],
      //   doorNo :[]
      // })
  })
  
  get personal(): FormArray {
    return this.userFormGroup.get('personal') as FormArray;
  }

  // addPersonal(){
  //   // this.personal.push(this.fb.control(''));
  //   this.router.navigate(['/react', 22]);
  // }

  onSubmit(){
    console.log(this.userFormGroup.value);
    this.userFormGroup.valueChanges.subscribe(i => console.log(i)
    );
    
  }

  customValidation(control : AbstractControl):ValidationErrors | null{
    const val = /^[a-zA-Z0-0]*$/.test( control.value || '');
    return val ? null : {customErrors : true}
  }

  getPosts(){
    const obs = this.http.get('https://jsonplaceholder.typicode.com/posts');
    obs.subscribe( item =>{
      console.log(item);
      
    });
  }

  getComments(){
    const obs = this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    obs.subscribe( item =>{
      console.log(item);
      
    });
  }
}
