import { Component, OnInit, Input } from '@angular/core';
import { MotoService } from '../../services/moto.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  constructor(private myservice: MotoService) {}

  items = this.myservice.getItems();
}
