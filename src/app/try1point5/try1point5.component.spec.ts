import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Try1point5Component } from './try1point5.component';

describe('Try1point5Component', () => {
  let component: Try1point5Component;
  let fixture: ComponentFixture<Try1point5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Try1point5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Try1point5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
