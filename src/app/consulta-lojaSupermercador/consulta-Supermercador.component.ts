import { Component, OnInit } from '@angular/core';
import { DadosService } from '../consulta-lojaSupermercador/dados.service';
import { loja } from '../consulta-lojaSupermercador/loja';

@Component({
  selector: 'app-consulta-lojaSupermercador',
  templateUrl: './consulta-lojaSupermercador.component.html',
  styleUrls: ['./consulta-lojaSupermercador.component.css'],
})
export class ConsultaLojaSupermercadorComponent implements OnInit {
  loja: loja[];

  constructor(private a : DadosService ) {
    this.loja  = [];
  }

  ngOnInit() {
    this.a.obterProdutos().subscribe((result) => {
      this.loja = result;
    });
  }
}
