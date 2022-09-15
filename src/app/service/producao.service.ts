import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProducaoService {

  constructor(private http: HttpClient) {}

  cadastrarProducao(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/producao', body);
  }

  buscarProducao(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/producao');
  }

  buscarProducaoId(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/producao/${id}`);
  }
}
