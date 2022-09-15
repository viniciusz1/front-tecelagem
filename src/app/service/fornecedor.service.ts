import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class Fornecedor {

    constructor(private http: HttpClient) { }

    cadastrarFornecedor(body: {}) {
        return this.http.post('https://tecelagem-back-end.vercel.app/api/fornecedor', body);
    }

    buscarFornecedores() {
        return this.http.get('https://tecelagem-back-end.vercel.app/api/fornecedor');
    }

    buscarFornecedorId(id: string) {
        return this.http.get(`https://tecelagem-back-end.vercel.app/api/fornecedor/${id}`);
    }
}
