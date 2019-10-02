import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fld-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public titre: string;

    constructor() {
        console.log(this.titre);
        debugger;
    }

    ngOnInit() {
        console.log(this.titre);
        debugger;
    }

    public alertTitre(titre: string) {
        alert(titre);
    }
}
