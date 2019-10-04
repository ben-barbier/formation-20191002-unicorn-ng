import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';
import { CartService } from '../../../shared/services/cart.service';
import { ThemePalette } from '@angular/material';
import { UnicornsService } from '../../../shared/services/unicorns.service';

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

    constructor(private cartService: CartService,
                private unicornService: UnicornsService,
    ) {
    }

    public ngOnInit(): void {
        this.favoriteColor = this.cartService.isInCart(this.unicorn) ? 'warn' : 'primary';
    }

    public toggleToCart(): void {
        if (this.cartService.isInCart(this.unicorn)) {
            this.cartService.removeFromCart(this.unicorn);
            this.favoriteColor = 'primary';
        } else {
            this.cartService.addToCart(this.unicorn);
            this.favoriteColor = 'warn';
        }
    }

    public deleteUnicorn() {
        this.unicornService.deleteUnicorn(this.unicorn).subscribe(() =>
            this.deleted.emit(this.unicorn)
        );
    }
}
