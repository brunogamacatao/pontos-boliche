import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deve somar dois números', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.soma(2, 3)).toBe(5);
  }));

  it('deve retornar o maior número', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service.maior(2, 3)).toBe(3);
    expect(service.maior(4, 1)).toBe(4);
  }));
});


