import { Component, OnInit } from '@angular/core';
import { MotoService } from 'src/app/services/moto.service';
import {Product, products} from '../../products'

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCartComponent{

  products = products;
  constructor(private myservice: MotoService) {}

  addToCart(product: Product) {
    this.myservice.addToCart(product);
  }
}
