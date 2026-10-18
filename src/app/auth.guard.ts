import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, ResolveFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ReactForm } from "./react-form/react-form";
import { HttpClient } from "@angular/common/http";

// type SomeFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => boolean | Observable<boolean>;

export const authGuardReact = (route: ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
    
    const router = inject(Router);
    if( state.url == "/react/65"){
        console.log(state.url);
        return true;
    }
    router.navigate(['/temp']);
    return false ;
}

export const authGuardUnSaved  = (comp:any)=>{
        if( comp.test == "test"){
            return true
        }
        return false;
}

export const reactResolver= (route:any)=>{

    const http = inject(HttpClient);
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    return http.get<ReactForm>(baseUrl);

}
