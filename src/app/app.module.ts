import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from "./pages/home/home.module";
import { ShareModule } from "./modules/share/share.module";
import { MotoService } from "./services/moto.service";
@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [MotoService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        ShareModule,
    ]
})
export class AppModule { }
