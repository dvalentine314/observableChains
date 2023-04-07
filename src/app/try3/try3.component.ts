import { Component, OnInit } from '@angular/core';
import { MockHttpService } from '../mock-http.service';
import { filter, map, tap, switchMap } from 'rxjs';

/** use more of rxjs's declarative functions to highlight behavior */
@Component({
  selector: 'app-try3',
  templateUrl: './try3.component.html',
  styleUrls: ['./try3.component.css'],
})
export class Try3Component implements OnInit {
  orderNumber: number | undefined;
  purchaseAmount: number | undefined;

  constructor(private service: MockHttpService) {}

  ngOnInit() {
    this.service
      .getCustomer()
      .pipe(
        filter((customer) => customer.orderNumbers.length > 0),
        map((customer) => customer.orderNumbers[0]),
        tap((orderNumber) => (this.orderNumber = orderNumber)),
        switchMap((orderNumber) => this.service.getOrder(orderNumber))
      )
      .subscribe((order) => {
        this.purchaseAmount = order.amount;
      });
  }
}
