import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Try3Component } from './try3.component';

describe('Try3Component', () => {
  let component: Try3Component;
  let fixture: ComponentFixture<Try3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Try3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Try3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
