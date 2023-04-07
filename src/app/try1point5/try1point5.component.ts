import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { MockHttpService } from '../mock-http.service';

/** Convert the observables to promises because we only want one value and then it completes. */
@Component({
  selector: 'app-try1point5',
  templateUrl: './try1point5.component.html',
  styleUrls: ['./try1point5.component.css'],
})
export class Try1point5Component implements OnInit {
  orderNumber: number | undefined;
  purchaseAmount: number | undefined;

  constructor(private service: MockHttpService) {}

  async ngOnInit(): Promise<void> {
    const customer = await lastValueFrom(this.service.getCustomer());
    this.orderNumber = customer.orderNumbers[0];
    const order = await lastValueFrom(this.service.getOrder(this.orderNumber));
    this.purchaseAmount = order.amount;
  }
}
