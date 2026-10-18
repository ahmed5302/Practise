import { Routes } from '@angular/router';
import { ProfilePage } from './profile-page/profile-page';
import { TempDriven } from './temp-driven/temp-driven';
import { ReactForm } from './react-form/react-form';
import { TempChild1 } from './temp-child-1/temp-child-1';
import { TempChild2 } from './temp-child-2/temp-child-2';
import { authGuardReact, authGuardUnSaved, reactResolver } from './auth.guard';
import { TemplateDriven } from './template-driven/template-driven';
import { ReactiveForm } from './reactive-form/reactive-form';
import { RouteService } from './route-service';
import { RxjsNew } from './rxjs-new/rxjs-new';
import { OnpushParent } from './onpush-parent/onpush-parent';
import { SignalParent } from './signal-parent/signal-parent';

export const routes: Routes = [
    {
        path : '',
        redirectTo:'/signalParent',
        pathMatch: 'full'
    },
    {
        path:'on-push',
        component : OnpushParent
    },
    {
        path :'signalParent',
        component : SignalParent
    },
    {
        path :'rxjs-new',
        component : RxjsNew,
        providers : [RouteService]
    },
    {
        path:'profile',
        component : ProfilePage,
    },
    {
        path :'temp-driv',
        component : TemplateDriven
    },
    {
        path : 'reactive-form',
        component : ReactiveForm,
        providers : [RouteService]
    },
    {
        path:'temp',
        component : TempDriven,
        children : [
            {
                path : '',
                component : TempChild1
            },
            {
                path : 'child',
                component : TempChild2
            }
        ]
    },
    {
        path:'react/:id',
        component: ReactForm,
        data : { header : "ROUTE",dev :"ANGULAR "},
        resolve : { key : reactResolver},
        canActivate : [authGuardReact],
        canDeactivate : [authGuardUnSaved]
        // loadComponent : ()=>  import('./react-form/react-form').then(res => res.ReactForm)
    },
    {
        path :'**',
        component : ProfilePage
    }
];
