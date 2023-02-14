import { Component, Input } from '@angular/core';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {


  constructor(private myservice: MotoService) {}

  @Input()
  quantity = 0;

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
