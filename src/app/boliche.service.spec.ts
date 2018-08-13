import { TestBed, inject } from '@angular/core/testing';

import { BolicheService } from './boliche.service';

describe('BolicheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolicheService]
    });
  });

  it('should be created', inject([BolicheService], (service: BolicheService) => {
    expect(service).toBeTruthy();
  }));

  it('deve somar os pontos de duas jogadas consecutivas', inject([BolicheService], (service: BolicheService) => {
    expect(service.jogar([3,2])).toBe(5);
  }));

  it('deve somar os pinos da próxima jogada sempre que um space ocorer', inject([BolicheService], (service: BolicheService) => {
    expect(service.jogar([5,5,2,2])).toBe(16);
  }));

  it('deve somar os pinos das duas próximas jogadas sempre que um strike ocorrer', inject([BolicheService], (service: BolicheService) => {
    expect(service.jogar([10,5,2])).toBe(24);
  }));

  it('a jogada perfeita deve somar 300 pontos', inject([BolicheService], (service: BolicheService) => {
    expect(service.jogar([10,10,10,10,10,10,10,10,10,10,10,10])).toBe(300);
  }));

  it('deve somar os pontos intermediários sempre que um quadro terminar', inject([BolicheService], (service: BolicheService) => {
    expect(service.jogar([5, 5])).toBe(10);
    expect(service.jogar([10])).toBe(10);
    expect(service.jogar([10, 10])).toBe(20);
    expect(service.jogar([10, 10, 10])).toBe(50);
  }));

  it('não deve retornar NaN nas somas intermediárias', inject([BolicheService], (service: BolicheService) => {
    expect(service.jogar([5])).toBe(5);
    expect(service.jogar([3, 2, 1])).toBe(6);
  }));
});
