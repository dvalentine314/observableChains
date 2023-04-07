import { Component } from '@angular/core';
import { MockHttpService } from '../mock-http.service';

/** The most basic way to get two observables where one is dependent on the other.
 * This is only viable here because both observables complete. Otherwise we would
 * cause ourselves all kinds of problems.*/
@Component({
  selector: 'app-try1',
  templateUrl: './try1.component.html',
  styleUrls: ['./try1.component.css'],
})
export class Try1Component {
  orderNumber: number | undefined;
  purchaseAmount: number | undefined;

  constructor(private service: MockHttpService) {}

  ngOnInit(): void {
    this.service.getCustomer().subscribe((customer) => {
      this.orderNumber = customer.orderNumbers[0];
      this.service.getOrder(this.orderNumber).subscribe((order) => {
        this.purchaseAmount = order.amount;
      });
    });
  }
}
