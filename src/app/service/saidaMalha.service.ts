import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SaidaMalhaService {

  constructor(private http: HttpClient) {}

  cadastrarSaidaMalha(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/saida-malha', body);
  }

  buscarSaidasMalhas(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/saida-malha');
  }

  buscarSaidaMalha(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/saida-malha/${id}`);
  }

  editarSaidaMalha(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/saida-malha/${id}`, body);
  }

  deletarSaidaMalha(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/saida-malha/${id}`);
  }
}