import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class FioService {

    constructor(private http: HttpClient) { }

    cadastrarFio(body: {}) {
        return this.http.post('https://tecelagem-back-end.vercel.app/api/fio', body);
    }

    buscarFios() {
        return this.http.get('https://tecelagem-back-end.vercel.app/api/fio');
    }

    buscarFioId(id: string) {
        return this.http.get(`https://tecelagem-back-end.vercel.app/api/fio/${id}`);
    }
}
