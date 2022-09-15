import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FioMalha {

    constructor(private http: HttpClient) { }

    cadastrarFioMalha(body: {}) {
        return this.http.post('https://tecelagem-back-end.vercel.app/api/fio-malha', body);
    }

    buscarFioMalha() {
        return this.http.get('https://tecelagem-back-end.vercel.app/api/fio-malha');
    }

    buscarFioMalhaId(id: string) {
        return this.http.get(`https://tecelagem-back-end.vercel.app/api/fio-malha/${id}`);
    }
}
