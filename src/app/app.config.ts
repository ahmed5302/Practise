import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { globalInteceptor } from './interceptor';
import { API_URL } from './tokens';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './counter-reducer';
import { provideEffects } from '@ngrx/effects';
import * as counterEffects from './counter-effects';
import { NgEventBus } from 'ng-event-bus';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding()),
    provideHttpClient( withInterceptors([globalInteceptor])),
    { provide: API_URL, useValue: 'https://api.example.com' },
    provideStore( { appConfigCounter :counterReducer }),
    provideEffects(counterEffects),
    NgEventBus
  ]
};
