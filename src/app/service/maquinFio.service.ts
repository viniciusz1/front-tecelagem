import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MaquinaFioService {

  constructor(private http: HttpClient) {}

  cadastrarMaquinaFio(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/maquina-fio', body);
  }

  buscarMaquinasFios(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/maquina-fio');
  }

  buscarMaquinaFio(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/maquina-fio/${id}`);
  }

  editarMaquinaFio(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/maquina-fio/${id}`, body);
  }

  deletarMaquinaFio(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/maquina-fio/${id}`);
  }
}