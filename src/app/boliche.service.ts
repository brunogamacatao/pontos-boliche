import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BolicheService {
  static readonly MAX_QUADROS = 10;

  constructor() { }

  jogar(jogadas: number[]) : number {
    let pontos = 0;
    let quadros = 0;

    for (let i = 0; i < jogadas.length && quadros < BolicheService.MAX_QUADROS; quadros++) {
      pontos += this.getPontosDoQuadro(jogadas, i);
      let proximo = this.getInicioProximoQuadro(jogadas, i);

      if (proximo < jogadas.length - 1) {
        if (this.isStrike(jogadas, i)) {        
          pontos += jogadas[proximo] + jogadas[proximo + 1];
        } else if (this.isSpare(jogadas, i)) {
          pontos += jogadas[proximo + 1];
        }
      }

      i = proximo;
    }

    return pontos;
  }

  getPontosDoQuadro(jogadas: number[], i) : number {
    if (this.isStrike(jogadas, i)) {
      return jogadas[i];
    } else if (i < jogadas.length - 1) {
      return jogadas[i] + jogadas[i + 1];
    }
    return jogadas[i];
  }

  isStrike(jogadas: number[], i) : boolean {
    return jogadas[i] === 10;
  }

  isSpare(jogadas: number[], i) : boolean {
    return (jogadas[i] + jogadas[i + 1]) === 10;
  }

  getInicioProximoQuadro(jogadas: number[], i) : number {
    return this.isStrike(jogadas, i) && i + 1 || i + 2;
  }
}
