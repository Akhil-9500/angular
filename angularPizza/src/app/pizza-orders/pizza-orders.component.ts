import { Component, OnInit, Input } from '@angular/core';
import { pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pizza-orders',
  templateUrl: './pizza-orders.component.html',
  styleUrls: ['./pizza-orders.component.scss']
})
export class PizzaOrdersComponent implements OnInit {
  pizza: pizza;

  constructor(private route: ActivatedRoute,private pizzaService: PizzaService,private location: Location) { }
 // @Input() pizza: pizza;

 ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  console.log(""+ id)
  this.pizzaService.getPizzaDetails(id)
    .subscribe(pizza => this.pizza = pizza);
    console.log(""+ id)
}

goBack(): void{
  this.location.back();
}

}
