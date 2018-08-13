import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  soma(a, b) : number {
    return a + b;
  }

  maior(a, b) : number {
    return a > b && a || b;
  }
}