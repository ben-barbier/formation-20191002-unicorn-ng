import { Component } from '@angular/core';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { Unicorn } from '../../shared/models/unicorn.model';

@Component({
    selector: 'fld-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Unicorn[];

    constructor(unicornsService: UnicornsService) {
        unicornsService.getAll().subscribe(unicorns => this.unicorns = unicorns);
    }

}
