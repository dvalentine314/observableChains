import { Component, OnInit } from '@angular/core';
import { Observable, filter, finalize, map, shareReplay, switchMap } from 'rxjs';
import { MockHttpService } from '../mock-http.service';

/** Use shareReplay to break up the observable chain. We added refCount to guarantee that
 * the shareReplay would get destroyed when all the subscriptions completed. it's probably
 * not totally necessary here since the parent observables complete. */
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
      shareReplay({ bufferSize: 1, refCount: true }),
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
