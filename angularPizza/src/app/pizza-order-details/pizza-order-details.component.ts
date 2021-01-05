import { Component, OnInit } from '@angular/core';
import { pizza } from '../pizza';
import { PizzaService } from '../pizza.services';

@Component({
  selector: 'app-pizza-order-details',
  templateUrl: './pizza-order-details.component.html',
  styleUrls: ['./pizza-order-details.component.scss']
})
export class PizzaOrderDetailsComponent implements OnInit {
  pizzaDetails : pizza[];
  selectedPizza:any;
  constructor(private pizzaService : PizzaService) { }

  ngOnInit() {
    this.getPizza();
  }

  getPizza(): void {
    this.pizzaService.getPIZZA()
    .subscribe(pizzaDetails => this.pizzaDetails = pizzaDetails);
  }

  onSelect(pizza: pizza): void {
    this.selectedPizza = pizza;
  }

}
