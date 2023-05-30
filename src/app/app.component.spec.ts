import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Try1Component } from './try1/try1.component';
import { Try2Component } from './try2/try2.component';
import { Try1point5Component } from './try1point5/try1point5.component';
import { Try3Component } from './try3/try3.component';
import { Try4Component } from './try4/try4.component';
import { Try5Component } from './try5/try5.component';
import { Try6Component } from './try6/try6.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Try1Component,
        Try2Component,
        Try1point5Component,
        Try3Component,
        Try4Component,
        Try5Component,
        Try6Component

      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
