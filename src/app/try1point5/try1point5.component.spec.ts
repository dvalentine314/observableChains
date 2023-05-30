import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MockHttpService } from '../mock-http.service';
import { Try1point5Component } from './try1point5.component';
import { ObservableInnerType } from '../types';

describe('Try1Point5Component', () => {
  let component: Try1point5Component;
  let fixture: ComponentFixture<Try1point5Component>;
  let mockHttpService: jasmine.SpyObj<MockHttpService>;

  beforeEach(async () => {
    mockHttpService = jasmine.createSpyObj('MockHttpService', ['getCustomer', 'getOrder']);

    await TestBed.configureTestingModule({
      declarations: [Try1point5Component],
      providers: [{ provide: MockHttpService, useValue: mockHttpService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Try1point5Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set orderNumber and purchaseAmount', async () => {
    const customer: ObservableInnerType<ReturnType<MockHttpService["getCustomer"]>> = { orderNumbers: [1],id: 1, name: 'test' };
    const order: ObservableInnerType<ReturnType<MockHttpService["getOrder"]>> = { amount: 100, orderNumber: 1 };

    mockHttpService.getCustomer.and.returnValue(of(customer));
    mockHttpService.getOrder.and.returnValue(of(order));

    await component.ngOnInit();

    expect(component.orderNumber).toEqual(customer.orderNumbers[0]);
    expect(component.purchaseAmount).toEqual(order.amount);
  });
});
