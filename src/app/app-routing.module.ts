import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { OddGuard } from './shared/guards/odd.guard';

const routes: Routes = [
    {path: '', component: UnicornListComponent},
    {
        path: 'unicorn-details/:id',
        component: UnicornDetailsComponent,
        canActivate: [OddGuard],
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
