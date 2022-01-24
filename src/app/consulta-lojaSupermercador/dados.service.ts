import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loja } from '../consulta-lojaSupermercador/loja';

@Injectable({ providedIn: 'root' })
export class DadosService {
  URL = 'https://milenasilvadefr-atividade-final.milenasilvadefr.repl.co'
  ;

  constructor(private http: HttpClient) {
'https://milenasilvadefr-atividade-final.milenasilvadefr.repl.co';
;
  }

  obterProdutos(): Observable<loja[]> {
    return this.http.get<loja[]>(`${this.URL}/lojaSupermercador`);
  }
}
