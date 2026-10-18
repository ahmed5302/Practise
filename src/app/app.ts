import { Component, QueryList, signal, TemplateRef, ViewChild, ViewChildren, viewChildren, ViewContainerRef } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Sample } from './sample/sample';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from './custom-directive';
import { CommonModule, DatePipe, UpperCasePipe,CurrencyPipe, DecimalPipe,
            PercentPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe } from '@angular/common';
import { GenericList } from './generic-list/generic-list';
import { ProfilePage } from './profile-page/profile-page';
import { TempDriven } from './temp-driven/temp-driven';
import { ReactForm } from './react-form/react-form';
import { Product } from './product/product';
import { Rxjs } from './rxjs/rxjs';
import { BehaviorSubject, combineLatest, concatMap, debounceTime, distinctUntilChanged, mergeMap, of, ReplaySubject, Subject, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Common } from './common';
import { MaskAccountPipe } from './mask-account-pipe';
import { Parent } from './parent/parent';


@Component({
  selector: 'app-root',
  imports: [Sample, TempDriven, FormsModule, CustomDirective, CommonModule, GenericList, ProfilePage, ReactForm, RouterOutlet, RouterLink, Product, Rxjs, ReactiveFormsModule, UpperCasePipe, DatePipe, CurrencyPipe, DecimalPipe,
    PercentPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe, MaskAccountPipe, Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('myApp');
  amount = "123456789";
  someProp = 'TEST';
  title:string = "MY ANGULAR APP";
  toggle:boolean = false;
  message:string =  "MY MESSAGE";
  searcTerm = {
    value : ''
  }
  username:string = "HELLO";
  parentCount:number = 0;
  paraBind : string = "INITIAL"
  myArr:any[] = ["one","two","three"];
  @ViewChild('ts1') ts1!:TemplateRef<any>;
  @ViewChild('cont',{read:ViewContainerRef}) cont! : ViewContainerRef;
  @ViewChildren(ProfilePage) profile!: QueryList<ProfilePage>;
  customForm!:FormGroup;
  @ViewChild('comp',{ read:ViewContainerRef}) comp!:ViewContainerRef;
constructor( private router : Router, private fb : FormBuilder, private http : HttpClient, private common :Common){

}
obs$ = of([1,2,'three']);
trigger(){
  this.myArr.push('Four');
  // this.myArr = [...this.myArr,'Four']
}

triggerIM(){
  this.amount = "545645445656456";
}
ngOnInit(){



function getCounter(){
  let counter = 10;
  return function(){
      return counter = counter + 100;
  }
}


  let counter = getCounter();

  // console.log("COUNT LIST ", counter());
  
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

  const fre = fruits.reduce((acc:any,ele:any)=>{
    acc[ele] =(acc[ele] || 0) +1;
    return acc;
  },{});
// console.log(fre);

// this.common.obs.subscribe( x => console.log(" SUBS ",x)
// );
this.common.setVal(42);
  // this.common.getUser().subscribe({
  //   next : (res) => { console.log(res)
  //   }
  // });

  this.customForm = this.fb.group({
    name :[''],
    age:['']
  });

  let val$ = this.customForm.get('name')?.valueChanges;
  let val2$ = this.customForm.get('age')?.valueChanges;
  combineLatest([val$,val2$])
  .pipe(
    // tap(value => console.log("TAP ",value)),
    debounceTime(2000),
    distinctUntilChanged(),
    tap(x => console.log("TAP ",x)
    ),
    switchMap( res => this.http.get(`https://jsonplaceholder.typicode.com/${res}`))
  ).subscribe( x => console.log(x)
  );

  localStorage.setItem("token" , "Authentication");
}
  showComp(){
    let ref = this.comp.createComponent(ProfilePage);
    console.log(ref.instance.users);
    
  }
  connect = {
    position :"DEV"
  }

  items = ["Success"];

  addNew(){
    this.myArr.push('four')
  }
  reactEle(){
    this.router.navigate(['/react',65])
  }
  ngAfterViewInit(){
    // this.cont.createEmbeddedView(this.ts1,this.connect);
    // this.profile.forEach( item =>{
    //   console.log(item.users);
      
    // });
    // this.profile.changes.subscribe(items =>{
    //   console.log("SUB", items);
      
    // });
    
  }


 
  // triggerDiv($event:any){
  //   console.log(this.username);
  // }

  // onInput(e:Event){
  //   // console.log(e.target);
  //   const value = (e.target as HTMLInputElement).value;
  //   this.searcTerm.value = value;
  //   this.username = value;
  //   // this.searcTerm = { ...this.searcTerm, value : value}
  // }

  // toChild(e:any){
  //   // console.log(e);
  // }

  // inputCh(e:any){
  //   console.log(e);
  //   this.username = e.value
  // }

  // onCountChange(e:any){
  //   console.log(e);
  // }

  // ngDoCheck(){
  //   console.log("DO CHECK");
  // }

  // getChild(ref:Sample){
  //   console.log(ref);
  //   ref.childProp = "CHANGED";
  // }

  // formSec(forms:any){
  //   console.log(forms);
  // }

}
