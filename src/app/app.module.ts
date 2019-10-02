import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MagicalNamePipe } from './shared/pipes/magical-name.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        MagicalNamePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
