import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MockHttpService } from '../mock-http.service';
import { Try5Component } from './try5.component';
import { ObservableInnerType } from '../types';

describe('Try5Component', () => {
  let component: Try5Component;
  let fixture: ComponentFixture<Try5Component>;
  let mockHttpService: jasmine.SpyObj<MockHttpService>;

  beforeEach(async () => {
    mockHttpService = jasmine.createSpyObj('MockHttpService', ['getCustomer', 'getOrder']);

    await TestBed.configureTestingModule({
      declarations: [Try5Component],
      providers: [{ provide: MockHttpService, useValue: mockHttpService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Try5Component);
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