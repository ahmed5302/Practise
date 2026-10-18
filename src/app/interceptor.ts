import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";

export const globalInteceptor : HttpInterceptorFn = (req,next)=>{
    // console.log("INTERCEPTOR ",req);
    const router = inject(Router);
    let token = localStorage.getItem("token");
    const request = token ? req.clone({ setHeaders : { 'Authorization' : `Bearer ${token}` } }): req;

    return next(request).pipe(
        catchError( ( err :any)=>{
            // only redirect for auth problems — a 404/500 should be handled by the caller
            if(err?.status === 401 || err?.status === 403){
                router.navigate(['/profile']);
            }
            return throwError(()=>err);
        })
    );
    // pipe(
    //     catchError((error: any) => {
    //         if(error){
    //         router.navigate(['/profile']); 
    //         }
    //         return throwError(() => error);
    //     })
    // );
}