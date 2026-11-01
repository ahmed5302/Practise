import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] TEST',props<{Details : Account}>());
export const decrement = createAction('[Counter Component] SAMPLE',props<{Details : Account}>());
export const reset = createAction('[Counter Component] ROOT');