import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MockHttpService } from '../mock-http.service';
import { Try3Component } from './try3.component';
import { ObservableInnerType } from '../types';

describe('Try3Component', () => {
  let component: Try3Component;
  let fixture: ComponentFixture<Try3Component>;
  let mockHttpService: jasmine.SpyObj<MockHttpService>;

  beforeEach(async () => {
    mockHttpService = jasmine.createSpyObj('MockHttpService', ['getCustomer', 'getOrder']);

    await TestBed.configureTestingModule({
      declarations: [Try3Component],
      providers: [{ provide: MockHttpService, useValue: mockHttpService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Try3Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set orderNumber and purchaseAmount', () => {
    const customer: ObservableInnerType<ReturnType<MockHttpService["getCustomer"]>> = { orderNumbers: [1],id: 1, name: 'test' };
    const order: ObservableInnerType<ReturnType<MockHttpService["getOrder"]>> = { amount: 100, orderNumber: 1 };

    mockHttpService.getCustomer.and.returnValue(of(customer));
    mockHttpService.getOrder.and.returnValue(of(order));

    fixture.detectChanges();

    expect(component.orderNumber).toEqual(customer.orderNumbers[0]);
    expect(component.purchaseAmount).toEqual(order.amount);
  });
});