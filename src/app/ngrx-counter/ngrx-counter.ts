import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { createAction, Store } from '@ngrx/store';
import { Observable, retry, shareReplay, tap } from 'rxjs';
import { decrement, increment, reset } from '../counter-action';
import { SampleDirective } from '../sample-directive';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngrx-counter',
  imports: [AsyncPipe, SampleDirective],
  templateUrl: './ngrx-counter.html',
  styleUrl: './ngrx-counter.css',
})
export class NgrxCounter {
  hoverColor = 'red';
  store : Store<{ appConfigCounter: Account }> = inject(Store);
  $obj :Observable<any> = this.store.select((state) => { 
    console.log(state); 
    return state.appConfigCounter.name });
    obj:Account  = {
      id : 1,
      name  :'Mansoor',
      age : 35
    };
    
  increment(){
    // TODO: Dispatch an increment action
    console.log(increment);
    console.log(createAction('[Counter Component] TEST'));
    this.store.dispatch(increment({Details : this.obj} ));
    this.http1.subscribe( val => {
      console.log( val);
    });
  }
  decrement(){
    // TODO: Dispatch a decrement action
    const obj = {...this.obj,name : "TEST"};
    console.log(this.obj);
    this.store.dispatch(decrement({Details : obj } ));
    //     this.http1.subscribe( val => {
    //   console.log( val);
    // });
    const  objurl = {
      "title": "AHMED",
    }
    const post = this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
    post.subscribe( (bal) => console.log(bal));

    const posetreturn = this.http.get('https://jsonplaceholder.typicode.com/posts');
    posetreturn.subscribe( (bal) => console.log(bal));
      
  }
  reset(){
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
        this.http1.subscribe( {
          next : (val)=> console.log(val),
          error : (err)=> {console.log(err)},
          complete : ()=> console.log("COMPLETE")
          
          
          
        });
  }

  http = inject(HttpClient);
  http1 = this.http.get('https://jsonplaceholder.typicode.com/posts');
  // http1 = this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
  //   tap(() => console.log('%c🌐 HTTP REQUEST HIT THE SERVER', 'color: red; font-weight: bold')),
  //   shareReplay(1)
  // );

  // lateSubscribe() {
  //   console.log('Subscriber A: subscribing now');
  //   this.http1.subscribe(val => console.log('Subscriber A got', val));

  //   // Late subscriber: request has most likely already completed
  //   setTimeout(() => {
  //     console.log('Subscriber B: subscribing after 3s');
  //     this.http1.subscribe(val => console.log('Subscriber B got', val));
  //   }, 3000);

  //   // Even later subscriber
  //   setTimeout(() => {
  //     console.log('Subscriber C: subscribing after 6s');
  //     this.http1.subscribe(val => console.log('Subscriber C got', val));
  //   }, 6000);
  // }



}
