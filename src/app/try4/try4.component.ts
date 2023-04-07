import { Component, OnInit } from '@angular/core';
import { MockHttpService } from '../mock-http.service';
import { filter, map, switchMap, zip, of } from 'rxjs';

/** force all the results together into the subscription. One cost of doing this
 * is we unnecessarily delay the return of the order number. That may or may not
 * matter depending on what we need. It's still ugly though. */
@Component({
  selector: 'app-try4',
  templateUrl: './try4.component.html',
  styleUrls: ['./try4.component.css'],
})
export class Try4Component implements OnInit {
  orderNumber: number | undefined;
  purchaseAmount: number | undefined;

  constructor(private service: MockHttpService) {}

  ngOnInit(): void {
    this.service
      .getCustomer()
      .pipe(
        filter((customer) => customer.orderNumbers.length > 0),
        map((customer) => customer.orderNumbers[0]),
        switchMap((orderNumber) =>
          zip([of(orderNumber), this.service.getOrder(orderNumber)])
        )
      )
      .subscribe(([orderNumber, order]) => {
        this.orderNumber = orderNumber;
        this.purchaseAmount = order.amount;
      });
  }
}
