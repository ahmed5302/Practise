import { CanActivateFn, CanMatchFn } from '@angular/router';
import { userProfile } from './user-profile';
import { inject } from '@angular/core';

export const canActivate: CanActivateFn = (route, state) => {
    if( route.data?.['status']){
        return true
    }
	return false;
};

export const canMatch1: CanMatchFn = ( route,segments) => {
    const user = inject(userProfile);
   return  user.isAdmin();
     
};
export const canMatch2: CanMatchFn = (route,segments) => {
     const user = inject(userProfile);
   return  user.isClient();
     
};