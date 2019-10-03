import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, from, Observable } from 'rxjs';
import { Unicorn } from '../models/unicorn.model';
import { flatMap, map, mergeMap, pluck, toArray } from 'rxjs/operators';
import { CapacitiesService } from './capacities.service';
import { Capacity } from '../models/capacity.model';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    constructor(private http: HttpClient,
                private capacitiesService: CapacitiesService,
    ) {
    }

    public getAll(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>('http://localhost:3000/unicorns');
    }

    public getAllWithCapacitiesLabels(): Observable<Unicorn[]> {
        return this.getAll().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn) => {
                return from(unicorn.capacities).pipe(
                    mergeMap((capacityId: number): Observable<Capacity> =>
                        this.capacitiesService.getCapacity(capacityId)
                    ),
                    pluck('label'),
                    toArray(),
                    map(capacityLabels => ({...unicorn, capacityLabels}))
                );
            }),
            toArray(),
        );
    }

    public getAllWithCapacitiesLabels2(): Observable<Unicorn[]> {
        return forkJoin([
            this.getAll(),
            this.capacitiesService.getAll(),
        ]).pipe(
            map(([unicorns, capacities]) => unicorns.map(unicorn => ({
                ...unicorn,
                capacityLabels: unicorn.capacities.map(id => capacities.find(c => c.id === id).label)
            }))),
        );
    }

    public getAverageAge(): Observable<number> {
        return this.getAll().pipe(
            flatMap(e => e),
            map(u => new Date().getFullYear() - u.birthyear),
            toArray(),
            map(ages => ages.reduce((acc, age) => acc + age, 0) / ages.length),
        );
    }

}
