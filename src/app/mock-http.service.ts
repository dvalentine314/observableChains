import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockHttpService {
  getCustomer() {
    return of({
      id: 1,
      name: 'John',
      orderNumbers: [1, 2, 3],
    }).pipe(delay(100));
  }

  getOrder(orderNumber: number) {
    return of({
      orderNumber,
      amount: 200,
    }).pipe(delay(100));
  }
}
