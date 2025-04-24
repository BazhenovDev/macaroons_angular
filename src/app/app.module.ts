import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {ProductsComponent} from './components/products/products.component';
import {ProductsService} from "./services/products.service";
import {AdvantagesComponent} from './components/advantages/advantages.component';
import { BgButtonDirective } from './directives/bg-button.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { WordLengthPipe } from './pipes/word-length.pipe';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    AdvantagesComponent,
    BgButtonDirective,
    CurrencyPipe,
    WordLengthPipe,
    PhoneNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule {
}
