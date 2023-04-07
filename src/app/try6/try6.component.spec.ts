import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Try6Component } from './try6.component';

describe('Try6Component', () => {
  let component: Try6Component;
  let fixture: ComponentFixture<Try6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Try6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Try6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
