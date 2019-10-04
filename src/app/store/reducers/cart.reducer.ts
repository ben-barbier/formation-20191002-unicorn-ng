import { Action, createReducer, on } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import * as CartActions from '../actions/cart.actions';
import * as UnicornsActions from '../actions/unicorns.actions';

export const initialState: Unicorn[] = [];

export const cartReducer = createReducer(
    initialState,
    on(CartActions.addToCart, (state, action) => [...state, action.unicorn]),
    on(CartActions.removeFromCart, (state, action) => state.filter(u => u.id !== action.unicorn.id)),
    on(CartActions.clearCart, () => []),
    on(UnicornsActions.removeFromList, (state, action) => state.filter(u => u.id !== action.unicorn.id)),
);

export function reducer(state: Unicorn[], action: Action) {
    return cartReducer(state, action);
}
