import { Component, Input, OnInit } from '@angular/core';
import { pizza } from '../pizza';
import { PizzaService } from '../pizza.services';

@Component({
  selector: 'app-pizza-order-details',
  templateUrl: './pizza-order-details.component.html',
  styleUrls: ['./pizza-order-details.component.scss']
})
export class PizzaOrderDetailsComponent implements OnInit  {
  pizzaDetails : any;
  selectedPizza : any;


  constructor(private pizzaService : PizzaService) { }

  ngOnInit() {
    this.getPizza();
  }

  getPizza(): void {
    if(localStorage.getItem('data')){
      this.pizzaDetails=JSON.parse(localStorage.getItem('data'))
    }
    else{
      this.pizzaService.getPIZZA()
      .subscribe(pizzaDetails => {this.pizzaDetails = pizzaDetails;
       localStorage.setItem('data',JSON.stringify(pizzaDetails)) 
      }
        );
    }

    
  }
}
