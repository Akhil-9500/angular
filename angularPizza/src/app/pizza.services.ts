import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { pizza } from './pizza';
import { PIZZA } from './Mock-details';


@Injectable({ providedIn: 'root' })
export class PizzaService {

  constructor() { }

  getPIZZA(): Observable<pizza[]> {
    return of(PIZZA);
  }

  getPizzaDetails(id: number): Observable<pizza> {
    return of(PIZZA.find(hero => hero.id === id));
  }
}
