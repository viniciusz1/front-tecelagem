import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaService {

  constructor(private http: HttpClient) {}

  cadastrarMaquina(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/maquina', body);
  }

  buscarMaquinas(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/maquina');
  }

  buscarMaquina(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/maquina/${id}`);
  }

  editarMaquina(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/maquina/${id}`, body);
  }

  deletarMaquina(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/maquina/${id}`);
  }
}
