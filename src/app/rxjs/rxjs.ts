import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { catchError, combineLatest, concat, concatMap, connect, first, forkJoin, from, fromEvent, interval, map, merge, multicast, of, publish, publishReplay, retry, scan, share, shareReplay, Subject, switchMap, take, takeUntil, timer } from 'rxjs';
import { RouteService } from '../route-service';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.css',
})
export class Rxjs implements AfterViewInit {

  servise = inject(RouteService);
  http = inject(HttpClient)

  // request1 = this.http.get('https://jsonplaceholder.typicode.com/users');
  // request2 = this.http.get('https://jsonplaceholder.typicode.com/comments');
  // request3 = this.http.get('https://jsonplaceholder.typicode.com/photos');

  // request1 = interval(1000).pipe(take(3));
  // request2 = interval(1500).pipe(take(3));
  // request3 = interval(2000).pipe(take(3));


  ngOnInit(){
interval(1000).pipe(                      // outer: 0 @1s, 1 @2s, 2 @3s
  take(3),
  switchMap(i =>
    interval(400).pipe(                 // inner: every 400 ms, 3 values
      take(3),
      map(j => `outer ${i} → inner ${j}`)
    )
  )
).subscribe(console.log);

// share$.subscribe( x => console.log('FIRST ', x));
// share$.subscribe( x => console.log('SECOND ', x));
// setTimeout( () =>{ 
//   share$.subscribe( x => console.log('THIRD ', x));
// }
  }

    // merge( this.request3,this.request2,this.request1).pipe(
    //   retry(1),
    //   catchError( ()=> of([])),
    // ).subscribe( data => {
    //   console.log(data);
    // }); 
    // console.log(this.request1);
    // console.log(this.request2);
    // console.log(this.request3);
  // }
  // original = of(1,2,3);
  // arr:any[]= [2,3,4,5]
  // original = from(this.arr);
  // original = of(2,3);
  // original = timer(2000);
  // @ViewChild('btn') btnRef!: ElementRef<HTMLButtonElement>;
  // stop$ = new Subject<void>();
  // ngAfterViewInit(){
  //   // const original = fromEvent(this.btnRef.nativeElement, 'click');
  //   const changed = this.original.pipe( 
  //     scan((arg1,arg2)=> arg1+arg2,0), 
  //     takeUntil(this.stop$))
  //     .subscribe(i => console.log(i)
  //   );

   

  //   }
//  break(){
//   this.stop$.next();
//   }
ngAfterViewInit(): void {
// const clicks$ = fromEvent(document, 'click').pipe(map(() => 'click event'));
// const keys$ = fromEvent(document, 'keydown').pipe(map(() => 'key event'));
// combineLatest([clicks$, keys$]).subscribe(value => console.log(value));
}
break1(){
   let request = this.http.get('https://jsonplaceholder.typicode.com/users').pipe(shareReplay(1));
  // let request = interval(1000).pipe(shareReplay());
   request.subscribe( x => console.log(x));
   request.subscribe( x => console.log(x));
   request.subscribe( x => console.log(x));
}
break2(){

}
}
