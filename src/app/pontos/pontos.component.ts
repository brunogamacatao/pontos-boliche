import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BolicheService } from '../boliche.service';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.css']
})
export class PontosComponent implements OnInit {
  pontosForm: FormGroup;
  dados = {
    pontos: ''
  };
  pontos = 0;
  pinos = [];
  quadros: any[] = [this.criarQuadro([])];

  constructor(private bolicheService: BolicheService) {
    this.criarForm();
  }

  ngOnInit() {
  }

  criarForm(): void {
    this.pontosForm = new FormGroup({
      pontos: new FormControl(this.dados.pontos, [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ])
    });
  }

  onSubmit(): void {
    let pontos = parseInt(this.dados.pontos);

    this.pinos.push(pontos);
    this.dados.pontos = '';

    let quadroAtual = this.quadros[this.quadros.length - 1];

    if (quadroAtual.isCheio()) {
      this.quadros.push(this.criarQuadro([pontos]));
    } else {
      quadroAtual.jogadas.push(pontos);
    }

    this.pontos = this.bolicheService.jogar(this.pinos);
  }

  criarQuadro(jogadas): any {
    return {
      jogadas: jogadas,
      getDescricao: function() {
        if (this.jogadas[0] === 10)
          return 'Strike';
        if (this.jogadas.length === 2) {          
          if (this.jogadas[0] + this.jogadas[1] === 10)
            return 'Spare';
          if (this.jogadas[0] + this.jogadas[1] === 0)
            return 'Falhou';
          return 'Normal';
        }
        return '';
      },
      isCheio: function() {
        return this.jogadas.length === 2 || this.isStrike();
      },
      isStrike: function() {
        return this.jogadas.length === 1 && this.jogadas[0] === 10;
      }
    };
  }
}
