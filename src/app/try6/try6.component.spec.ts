import { ComponentFixture, TestBed } from '@angular/core/testing';
import { combineLatest, of } from 'rxjs';
import { MockHttpService } from '../mock-http.service';
import { Try6Component } from './try6.component';
import { ObservableInnerType } from '../types';

describe('Try6Component', () => {
  let component: Try6Component;
  let fixture: ComponentFixture<Try6Component>;
  let mockHttpService: jasmine.SpyObj<MockHttpService>;

  const customer: ObservableInnerType<ReturnType<MockHttpService["getCustomer"]>> = { orderNumbers: [1],id: 1, name: 'test' };
  const order: ObservableInnerType<ReturnType<MockHttpService["getOrder"]>> = { amount: 100, orderNumber: 1 };

  beforeEach(async () => {
    mockHttpService = jasmine.createSpyObj('MockHttpService', ['getCustomer', 'getOrder']);

    await TestBed.configureTestingModule({
      declarations: [Try6Component],
      providers: [{ provide: MockHttpService, useValue: mockHttpService }],
    }).compileComponents();

    mockHttpService.getCustomer.and.returnValue(of(customer));
    mockHttpService.getOrder.and.returnValue(of(order));

    fixture = TestBed.createComponent(Try6Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set orderNumber and purchaseAmount', (done) => {

    fixture.detectChanges();
    combineLatest([component.orderNumber$, component.purchaseAmount$]).subscribe(([orderNumber, purchaseAmount]) => {
      expect(orderNumber).toEqual(customer.orderNumbers[0]);
      expect(purchaseAmount).toEqual(order.amount);
      done();
    });
  });
});