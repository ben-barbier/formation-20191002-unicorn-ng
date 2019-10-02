import { Component, Input, OnInit } from '@angular/core';
import { Unicorn } from '../../../shared/models/unicorn.model';

@Component({
    selector: 'fld-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    constructor() {
    }

    ngOnInit() {
    }

    public alertTitre(titre: string) {
        alert(titre);
    }
}
