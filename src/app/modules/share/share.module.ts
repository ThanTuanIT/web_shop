import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemCartComponent} from '../../components/item-card/item-card.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import {CounterComponent} from "../../components/counter/counter.component"

@NgModule({
  declarations: [ItemCartComponent, NavbarComponent, CounterComponent],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  exports: [
    ItemCartComponent,
    NavbarComponent,
    CounterComponent,
  ]
})
export class ShareModule { }
