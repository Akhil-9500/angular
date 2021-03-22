import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { pizza } from './pizza';
import { PIZZA } from './Mock-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class PizzaService {

  private heroesUrl = '/assets/data/pizzaDb.json'
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getPIZZA(): Observable<pizza[]> {

    return this.http.get<pizza[]>(this.heroesUrl).pipe(
      map(response => {return response})
     
    );
    
  }

  getPizzaDetails(id: number): Observable<pizza> {
    return this.http.get<pizza[]>(this.heroesUrl).pipe(
      map(response => {return response.find(hero => hero.id === id)}))
  }


   
}
