import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaMalhaService {

  constructor(private http: HttpClient) {}

  cadastrarMaquinaMalha(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/maquina-malha', body);
  }

  buscarMaquinasMalhas(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/maquina-malha');
  }

  buscarMaquinaMalha(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/maquina-malha/${id}`);
  }

  editarMaquinaMalha(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/maquina-malha/${id}`, body);
  }

  deletarMaquinaMalha(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/maquina-malha/${id}`);
  }
}