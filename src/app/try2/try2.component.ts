import { Component, OnInit } from '@angular/core';
import { MockHttpService } from '../mock-http.service';
import { switchMap } from 'rxjs';

/** Use switchMap to chain the observables together */
@Component({
  selector: 'app-try2',
  templateUrl: './try2.component.html',
  styleUrls: ['./try2.component.css'],
})
export class Try2Component implements OnInit {
  orderNumber: number | undefined;
  purchaseAmount: number | undefined;

  constructor(private service: MockHttpService) {}

  ngOnInit(): void {
    this.service
      .getCustomer()
      .pipe(
        switchMap((customer) => {
          this.orderNumber = customer.orderNumbers[0];
          return this.service.getOrder(this.orderNumber);
        })
      )
      .subscribe((order) => {
        this.purchaseAmount = order.amount;
      });
  }
}
