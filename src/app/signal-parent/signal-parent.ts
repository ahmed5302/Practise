import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, linkedSignal, signal, untracked, viewChild, viewChildren } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SignalChild } from '../signal-child/signal-child';


@Component({
  selector: 'app-signal-parent',
  imports: [SignalChild ],
  templateUrl: './signal-parent.html',
  styleUrl: './signal-parent.css',
})
export class SignalParent {
  toChild = "SIGNAL";
  http = inject(HttpClient);
  users = toSignal(this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts'), { initialValue: [] });
  effectRef :any;

  title = "main header";
  color = "blue";
  // ---- parent/child demo ----
  childTitle = signal('Laptop');
  cartQty = signal(1);                                   // two-way bound to the child's model()

  firstChild = viewChild(SignalChild);                   // one child component instance
  allChildren = viewChildren(SignalChild);               // every <app-signal-child> in this template

  onRemoved(msg: string) { console.log('[parent] child said:', msg); }
  renameChild() { this.childTitle.set('Phone ' + Date.now() % 100); }
  focusChildInput() { this.firstChild()?.focusBox(); }  // call a child method
  // ---------------------------

  constructor() {
  effect(() => console.log('[parent] cartQty is now', this.cartQty()));
  effect(() => console.log('[parent] number of children:', this.allChildren().length));

  // this.effectRef = effect(() => {
  //   console.log(`Count is now ${this.count().name}`);
  //   // could also: save to localStorage, call an analytics API, etc.
  // });

effect(() => {
  const c = this.count();
  const v = untracked( () => this.val());
//       untracked( () => {
//          console.log(` VAL  is now ${this.val()}`);      
// });
    console.log(c,v);     
    // could also: save to localStorage, call an analytics API, etc.
  });

  // effect(() => {
  //   console.log('users', this.users());  // re-runs when the HTTP response arrives
  // });
}
ngAfterViewInit(){
  console.log("AFTER VIEW INIT",this.allChildren());
  this.allChildren().forEach((item,index)=>{
    console.log(item,index);
    
  });
  
}
count = signal({id :0,name :"Ahmed"},{equal : (a,b)=>a.id === b.id });
val = signal(40);
ngOnInit(){
  const Acc : Omit<Account,'name' | 'id'> & Partial<Pick<Account, 'name'>> = {
    // name : 'Ahmed',
    age :19,
    // id :2
  };
  // Acc.age = 30;
  console.log("Account ",Acc);
  

  function getAmount<T >(amo: T): T {
    console.log(amo);
    return amo
  }
  console.log( getAmount<number>(10));
  console.log( getAmount<string>('HELLLO'));
  // console.log(this.count());

  // this.count.update( v => v + 20 );
  //   console.log(this.count());
  //   const total = computed( ()=> this.count() + this.val());
  //   console.log( total ());
  //   this.val.set(100) ;
  //   console.log(total());
  
    // this.count.set({id :2,name :"Mansoor"});
  // console.log(this.count());
}
counter = 1;
 check(){
  // this.count.set(500);

this.count.set({id :5,name :"Ahmed"});
this.count.set({id :15,name :"TEST"});

const both = linkedSignal( ()=> this.count().id + this.val());
console.log(both());
both.set(20);
console.log(both());


if(this.counter == 3){
  this.effectRef.destroy();
}
}

check2(){
this.val.set(100);
console.log(this.counter,this.val());
}


}
