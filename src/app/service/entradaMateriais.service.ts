import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Item {
    descricao: string;
    fornecedorId: string;
    id: string;
    itemId: string;
    notaFiscalId: number;
    quantidade: number;
    valorTotalGasto: number;
  }

@Injectable({
    providedIn: 'root',
})
export class EntradaMateriais {

    constructor(private http: HttpClient) { }

    cadastrarEntradaMaterial(body: {}) {
        return this.http.post('https://tecelagem-back-end.vercel.app/api/entrada-materiais', body);
    }

    buscarEntradaMateriais(): Observable<Item[]> {
        return this.http.get<Item[]>('https://tecelagem-back-end.vercel.app/api/entrada-materiais');
    }

    buscarEntradaMateriaisId(id: string) {
        return this.http.get(`https://tecelagem-back-end.vercel.app/api/entrada-materiais/${id}`);
    }
}
