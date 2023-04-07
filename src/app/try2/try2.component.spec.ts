import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Try2Component } from './try2.component';

describe('Try2Component', () => {
  let component: Try2Component;
  let fixture: ComponentFixture<Try2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Try2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Try2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
