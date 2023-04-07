import { Component, OnInit } from '@angular/core';
import { filter, map, shareReplay, switchMap } from 'rxjs';
import { MockHttpService } from '../mock-http.service';

/** Use shareReplay to break up the observable chain. If we wanted to we could
 * use the orderNumber$ directly using the async pipe */
@Component({
  selector: 'app-try5',
  templateUrl: './try5.component.html',
  styleUrls: ['./try5.component.css'],
})
export class Try5Component implements OnInit {
  orderNumber: number | undefined;
  purchaseAmount: number | undefined;

  constructor(private service: MockHttpService) {}

  ngOnInit(): void {
    const orderNumber$ = this.service.getCustomer().pipe(
      filter((customer) => customer.orderNumbers.length > 0),
      map((customer) => customer.orderNumbers[0]),
      shareReplay(1)
    );

    orderNumber$.subscribe((orderNumber) => {
      this.orderNumber = orderNumber;
    });

    orderNumber$
      .pipe(switchMap((orderNumber) => this.service.getOrder(orderNumber)))
      .subscribe((order) => {
        this.purchaseAmount = order.amount;
      });
  }
}
