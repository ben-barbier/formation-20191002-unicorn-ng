import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MagicalNamePipe } from './shared/pipes/magical-name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/components/nav/nav.component';
import { MaterialModule } from './shared/modules/material.module';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        MagicalNamePipe,
        NavComponent,
        UnicornDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
