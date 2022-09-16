import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Fio {
  clienteId: string
  fioId: string
  fornecedorId: string
  id: string
  notaFiscalId: string
  peso: number
  precoNotaFiscal: number
  qtdCaixa: number
  rolosPorCaixa: number
}

@Injectable({
  providedIn: 'root',
})
export class EntradaFioService {

  constructor(private http: HttpClient) {}

  cadastrarEntradaFio(body: object) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/entrada-fio', body);
  }

  buscarEntradaFio(): Observable<Fio[]>{
    return this.http.get<Fio[]>('https://tecelagem-back-end.vercel.app/api/entrada-fio');
  }

  buscarEntradaFioId(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/entrada-fio/${id}`);
  }
}
