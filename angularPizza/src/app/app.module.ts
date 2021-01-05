import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaOrdersComponent } from './pizza-orders/pizza-orders.component';
import { PizzaOrderDetailsComponent } from './pizza-order-details/pizza-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaOrdersComponent,
    PizzaOrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
