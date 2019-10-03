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

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        MagicalNamePipe,
        NavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
