import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-take-until',
  template: `
    <app-poc-base
      [nome]="nome" [valor]="valor" estilo="bg-success">
    </app-poc-base>
  `
})
export class PocTakeUntilComponent implements OnInit, OnDestroy {

  public nome = 'Componente com takeUntil';
  public valor: string;

  public unsub$ = new Subject ();

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit() {
    this.enviarValorService.getValor ()
        .pipe (
          tap (v => console.log (this.nome, v)),
          takeUntil (this.unsub$) // bom para streaming
        )
        .subscribe (novoValor => this.valor = novoValor);
  }

  ngOnDestroy() {
    // Resolve problema de memory leak
    this.unsub$.next ();
    this.unsub$.complete ();
    console.log (`${this.nome} foi destruido.`);
  }

}
