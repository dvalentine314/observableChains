import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Try6Component } from './try6/try6.component';
import { Try5Component } from './try5/try5.component';
import { Try4Component } from './try4/try4.component';
import { Try3Component } from './try3/try3.component';
import { Try2Component } from './try2/try2.component';
import { Try1Component } from './try1/try1.component';
import { Try1point5Component } from './try1point5/try1point5.component';

@NgModule({
  declarations: [
    AppComponent,
    Try6Component,
    Try5Component,
    Try4Component,
    Try3Component,
    Try2Component,
    Try1Component,
    Try1point5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
