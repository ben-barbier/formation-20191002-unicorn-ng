import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UnicornsService } from '../services/unicorns.service';
import { map, pluck } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OddGuard implements CanActivate {

    constructor(private unicornsService: UnicornsService,
                private router: Router,
    ) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.unicornsService.getUnicorn(next.params.id).pipe(
            pluck('birthyear'),
            map(birthyear => birthyear % 2 !== 0),
            map(pair => pair ? true : this.router.parseUrl(''))
        );
    }

}
