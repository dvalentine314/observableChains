import { Component } from '@angular/core';
import { MockHttpService } from '../mock-http.service';
import { filter, map, shareReplay, switchMap } from 'rxjs';

/** Rather than subscribe to the observables and then bind them to the html template,
 * you can simply provide the observables directly and use the Angular async pipe.
 * We added refCount to guarantee that the shareReplay would get destroyed when all
 * the subscriptions completed. it's probably not totally necessary here since the
 * parent observables complete. */
@Component({
  selector: 'app-try6',
  templateUrl: './try6.component.html',
  styleUrls: ['./try6.component.css'],
})
export class Try6Component {
  constructor(private service: MockHttpService) {}

  orderNumber$ = this.service.getCustomer().pipe(
    filter((customer) => customer.orderNumbers.length > 0),
    map((customer) => customer.orderNumbers[0]),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  purchaseAmount$ = this.orderNumber$.pipe(
    switchMap((orderNumber) => this.service.getOrder(orderNumber)),
    map((order) => order.amount)
  );
}
