import { Component } from '@angular/core';
import { MockHttpService } from '../mock-http.service';
import { filter, map, shareReplay, switchMap } from 'rxjs';

/** Rather than subscribe to the observables and then bind them to the html template, you can simply provide the observables directly and use the Angular async pipe. */
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
    shareReplay(1)
  );

  purchaseAmount$ = this.orderNumber$.pipe(
    switchMap((orderNumber) => this.service.getOrder(orderNumber)),
    map((order) => order.amount)
  );
}
