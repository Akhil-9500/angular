import { Component, Input, OnInit } from '@angular/core';
import { pizza } from '../pizza';
import { PizzaService } from '../pizza.services';


@Component({
  selector: 'app-pizza-add-details',
  templateUrl: './pizza-add-details.component.html',
  styleUrls: ['./pizza-add-details.component.scss']
})
export class PizzaAddDetailsComponent implements OnInit {

  constructor(private pizzaService :PizzaService) { }

  @Input() pizzaDetails: any; 
  ngOnInit(): void {
  }

  addDetails(orderId,name,noItems,amount,status,changestatus){
   let abc = {"id": orderId,"name":name,"noItems":noItems,"amount":amount,"status":status,"changestatus":changestatus}
    this.pizzaDetails.push(abc)
     console.log("+++"+JSON.stringify(this.pizzaDetails) )
     localStorage.setItem('data',JSON.stringify(this.pizzaDetails))

}

}
