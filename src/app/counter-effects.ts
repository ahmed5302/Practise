import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concatMap, map, tap, withLatestFrom } from 'rxjs';
import { decrement, increment, reset } from './counter-action';
import { HttpClient } from '@angular/common/http';

export const logCounter = createEffect(
  ( actions$ = inject(Actions), store = inject(Store<{ appConfigCounter: Account }>),
http = inject(HttpClient)
) =>
    actions$.pipe(
      ofType(increment),
      withLatestFrom(store.select((state) => state.appConfigCounter)),
      tap( ([arg1,arg2])=>console.log("FIRST ",arg1.type, arg1.Details.id,  "SECOND ",arg2.id)),

      concatMap( ([arg1,arg2]) => http.get(`https://jsonplaceholder.typicode.com/posts/${arg1.Details.id}`)
      .pipe( 
      tap( (val)=> console.log("THIRD ", val)),
      map( (val)=> decrement({Details : {id : 2,age :45,name : "THREE"}})),
    )

    )
  ),
   { functional: true, dispatch: true }
);
