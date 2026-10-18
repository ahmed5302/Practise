import { Component, ElementRef, inject, InjectionToken, ViewChild } from '@angular/core';
import { RouteService } from '../route-service';
import { RouteService2 } from '../route-service2';
import { getEnvironment } from './env';
import { Logger } from '../token';
import { AsyncSubject, BehaviorSubject, combineLatest, concat, concatMap, exhaustMap, forkJoin, fromEvent, interval, map, merge, mergeMap, Observable, of, race, reduce, ReplaySubject, retry, shareReplay, Subject, switchMap, take, takeUntil, tap, timer, withLatestFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveForm } from '../reactive-form/reactive-form';
const API_CONFIGTEST  = new InjectionToken<{ apiUrl: string; timeout: number }>('API_CONFIG');
@Component({
  selector: 'app-rxjs-new',
  imports: [FormsModule,ReactiveForm],
  // providers: [RouteService2,
  //             { provide : RouteService, useExisting : RouteService2 },
  //             { provide : API_CONFIGTEST, useValue :{ apiUrl : environment.apiUrl, timeout : 3000}}
  // ],
  providers:[{ provide : Logger, useFactory: getEnvironment},
    
  ],
  templateUrl: './rxjs-new.html',
  styleUrl: './rxjs-new.css',
})
export class RxjsNew {

  // valueSer = inject(API_CONFIGTEST);
  props:number = 0;

  routeService  = inject(Logger);
  http = inject(HttpClient);
  //  routeService2  = inject(RouteService2);
  obs = of(1,2,3,4,5);
  obsInt = interval(1000);
  obsTimer = timer(5000);
  sub = new Subject<number>();
  behSub = new AsyncSubject<number>(); // Buffer size of 3
  httpRes! : Observable<any>;
    sub1 = new Subject<any>();
    sub2 = new Subject<any>();
     sub3 = new Subject<any>();

  // created once when the component is built; every subscriber shares this one request
  post$ = this.http.get(`https://jsonplaceholder.typicode.com/posts/1`).pipe(
    tap(()=> console.log("🌐 NETWORK CALL")),
    retry(2),
    shareReplay(1)
  );
  // eventObs!:Observable<Event>;

  @ViewChild('btn') btn!: ElementRef<HTMLButtonElement>;
  text$ = new BehaviorSubject<string>('');
  ngOnInit(){
  const obs1 = this.http.get("https://jsonplaceholder.typicode.com/posts/1");
  const obs2 = this.http.get("https://jsonplaceholder.typicode.com/posts/2");
  const obs3 = this.http.get("https://jsonplaceholder.typicode.com/posts/3");

  forkJoin({one : obs1, two : obs2, three : obs3}).subscribe( ({one, two, three})=>{
    console.log("FORK JOIN ", one, two, three);
  });



combineLatest([this.sub1, this.sub2, this. sub3]).subscribe(v => console.log(v));



    // this.eventObs = fromEvent(getElementById('btn'), 'click');
    // console.log("RouteService item value is : ",this.routeService.log());
    // console.log("API_CONFIGTEST value is : ",this.valueSer);
    // console.log("Are the services the same? ",this.routeService === this.routeService2) ;
    // this.sub.next(1);
    // this.sub.next(2);
    // this.behSub.next(90);
  //   this.obsInt.pipe(takeUntil(this.obsTimer)).subscribe( i => console.log(i));
  //   this.behSub.subscribe((item)=>{
  //     console.log("SUB 1", item);
  //   });
  //  this.behSub.next(100);
  //  this.behSub.next(200);
   
  //      this.behSub.subscribe((item)=>{
  //     console.log("SUB 2", item);
  //   });
  //  this.behSub.next(300);
  //  this.behSub.complete();

  // console.log(this.props );

  // this.obs.pipe(reduce( (acc,val)=> acc +val,0)  ).subscribe( {
  // next : (item) => console.log("NEXT ", item),
  // error : (err) => console.log("ERROR ", err),
  // complete : () => console.log("COMPLETE ")
  // });

  const slow$   = this.http.get("https://jsonplaceholder.typicode.com/posts/1");
  const medium$ = this.http.get("https://jsonplaceholder.typicode.com/posts/2");
  const fast$   = this.http.get("https://jsonplaceholder.typicode.com/posts/3");
const sample:any[] = [];
merge(slow$, medium$, fast$).subscribe(v => {
  console.log("MERGE ", v);
  sample.push(v);
console.log("MERGE SAMPLE ", sample );});
  

  const arr = [1,2,3,3,5,5,8,7,7];
  // const filArr = arr.filter( (item, index, arr) => arr.indexOf(item) === index);
  // const filArr = [...new Set(arr)];
  const filArr =  arr.reduce( (acc,val)=> acc+val,arr[0] )
  console.log("FILTERED ARRAY ", filArr);

  }

  // runs on every keystroke in the textbox
  onPropsChange(value : string){
    console.log("props changed : ", value);
    // const newValue = value as unknown as Observable<string>;
    // newValue.pipe(mergeMap(() => this.http.get(`https://jsonplaceholder.typicode.com/posts${newValue}`))).subscribe( item => console.log("OBS ", item));
if( value == "1"){
  this.sub1.next(value);
}
if( value == "2"){
  this.sub2.next(value);
}
if( value == "3"){
  this.sub3.next(value);
}

this.text$.next(value);

  }

  getHttpData(){
    // reuse the SAME observable on every click — that's what lets shareReplay cache it
    // this.post$.subscribe( (item)=>{
    //   console.log( item);
    // });


  }

  ngAfterViewInit(){
    // fromEvent(this.btn.nativeElement,'click').pipe(map(()=> this.props = this.props +1 ),concatMap( (id)=> this.http.get(`https://jsonplaceholder.typicode.com/posts/1`))).pipe(retry(2),shareReplay(1)).subscribe( (item)=>{
    //   console.log( item);
    // });

    fromEvent(this.btn.nativeElement,'click').pipe( withLatestFrom(this.text$) ).subscribe( ( [a,b] ) => {
      console.log("BTN CLICKED ", a, b);
    });

  }




}
// function margeMap(arg0: Observable<Object>): import("rxjs").OperatorFunction<string, unknown> {
//   throw new Error('Function not implemented.');
// }

