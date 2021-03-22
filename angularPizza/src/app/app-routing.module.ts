import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaOrderDetailsComponent } from './pizza-order-details/pizza-order-details.component';
import { PizzaOrdersComponent } from './pizza-orders/pizza-orders.component';


const routes: Routes = [
  { path: 'AllOrders', component: PizzaOrderDetailsComponent },
  { path: 'orderId/:id', component: PizzaOrdersComponent },
 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
