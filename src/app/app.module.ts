import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimatedDigitComponent } from './animated-digit/animated-digit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewersPageComponent } from './viewers-page/viewers-page.component';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CurrencyMaskModule } from 'ng2-currency-mask';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    AnimatedDigitComponent,
    ViewersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide:  DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
