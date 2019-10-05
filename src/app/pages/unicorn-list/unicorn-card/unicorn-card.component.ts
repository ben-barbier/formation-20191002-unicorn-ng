import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { ThemePalette } from '@angular/material';
import { UnicornsService } from '../../../shared/services/unicorns.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'fld-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output()
    public deleted = new EventEmitter<Unicorn>();

    public favoriteColor: ThemePalette;
    private isInCart: boolean;

    constructor(private cartService: CartService,
                private unicornService: UnicornsService,
    ) {
    }

    public ngOnInit(): void {
        this.cartService.isInCart(this.unicorn).subscribe(isInCart => {
            this.favoriteColor = isInCart ? 'warn' : 'primary';
            this.isInCart = isInCart;
        });
    }

    public toggleToCart(): void {
        if (this.isInCart) {
            this.cartService.removeFromCart(this.unicorn);
        } else {
            this.cartService.addToCart(this.unicorn);
        }
    }

    public deleteUnicorn() {
        this.unicornService.deleteUnicorn(this.unicorn).subscribe(() =>
            this.deleted.emit(this.unicorn)
        );
    }
}
