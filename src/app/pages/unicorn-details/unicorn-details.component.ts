import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnicornsService } from '../../shared/services/unicorns.service';
import { pluck, switchMap } from 'rxjs/operators';
import { Unicorn } from '../../shared/models/unicorn.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'fld-unicorn-details',
    templateUrl: './unicorn-details.component.html',
    styleUrls: ['./unicorn-details.component.scss']
})
export class UnicornDetailsComponent {

    public unicorn$: Observable<Unicorn>;

    constructor(route: ActivatedRoute,
                unicornsService: UnicornsService,
    ) {
        this.unicorn$ = route.params.pipe(
            pluck('id'),
            switchMap(id => unicornsService.getUnicorn(id)),
        );
    }

}
