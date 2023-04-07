import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Try5Component } from './try5.component';

describe('Try5Component', () => {
  let component: Try5Component;
  let fixture: ComponentFixture<Try5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Try5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Try5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
