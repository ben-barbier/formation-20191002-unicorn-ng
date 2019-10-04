import { Action, createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import * as UnicornsActions from '../actions/unicorns.actions';

export const initialState: Unicorn[] = [];

export const unicornsReducer = createReducer(
    initialState,
    on(UnicornsActions.addToList, (state, action) => [...state, action.unicorn]),
    on(UnicornsActions.removeFromList, (state, action) => state.filter(u => u.id !== action.unicorn.id)),
);

export function reducer(state: Unicorn[], action: Action) {
    return unicornsReducer(state, action);
}
