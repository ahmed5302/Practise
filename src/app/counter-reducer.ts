import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter-action';

export const initialState :Account = {
    id : 0,
    name : '',
    age :0
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, {Details}) => ( { ...state,...Details} )),
  on(decrement, (state, {Details}) => ( { ...state,...Details} )),
  on(reset, () => initialState)
 );
