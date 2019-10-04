import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../../store/actions/cart.actions';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart = this.store.select('cart');

    constructor(private store: Store<AppState>) {
    }

    public addToCart(unicorn: Unicorn): void {
        this.store.dispatch(addToCart({unicorn}));
    }

    public removeFromCart(unicorn: Unicorn): void {
        this.store.dispatch(removeFromCart({unicorn}));
    }

    public isInCart(unicorn: Unicorn): Observable<boolean> {
        return this.cart.pipe(
            map(unicorns => unicorns.some(u => u.id === unicorn.id)),
        );
    }

}
