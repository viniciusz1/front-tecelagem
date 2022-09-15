import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/funcionario', body);
  }

  buscarFuncionarios(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/funcionario');
  }

  buscarFuncionario(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/funcionario/${id}`);
  }

  editarFuncionario(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/funcionario/${id}`, body);
  }

  deletarFuncionario(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/funcionario/${id}`);
  }

  
}