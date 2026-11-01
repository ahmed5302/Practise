import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class  userProfile{
    profileStatus:boolean = false;

    changeProfile(status:boolean):void{
        this.profileStatus = status;
    }
    isAdmin():boolean{
        return this.profileStatus;
    }
    isClient():boolean{
        return !this.profileStatus;
    }
}