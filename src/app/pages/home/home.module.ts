import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from "../../modules/share/share.module";

@NgModule({
    declarations: [
        HomeComponent, 
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ShareModule,
    ]
})
export class HomeModule { }
