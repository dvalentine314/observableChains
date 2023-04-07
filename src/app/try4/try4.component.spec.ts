import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Try4Component } from './try4.component';

describe('Try4Component', () => {
  let component: Try4Component;
  let fixture: ComponentFixture<Try4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Try4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Try4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
