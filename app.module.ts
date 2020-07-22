import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessAlertComponent }  from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'

@NgModule({
  declarations: [
    SuccessAlertComponent,
    AppComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
