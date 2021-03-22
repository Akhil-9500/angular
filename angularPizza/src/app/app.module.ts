import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaOrdersComponent } from './pizza-orders/pizza-orders.component';
import { PizzaOrderDetailsComponent } from './pizza-order-details/pizza-order-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaAddDetailsComponent } from './pizza-add-details/pizza-add-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PizzaOrdersComponent,
    PizzaOrderDetailsComponent,
    PizzaAddDetailsComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
