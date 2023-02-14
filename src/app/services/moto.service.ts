import { Injectable, Input, Output } from '@angular/core';
import { Product } from '../products';

import { CounterComponent } from '../components/counter/counter.component';
@Injectable({
  providedIn: 'root',
})
export class MotoService {
  items: Product[] = [];

  @Input() quantity = 1;

  addToCart(product: Product) {
    if (this.items.includes(product)) {
      
    } else {
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }
}
