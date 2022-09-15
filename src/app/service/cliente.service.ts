import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  cadastrarCliente(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/cliente', body);
  }

  buscarClientes(){

    return this.http.get('https://tecelagem-back-end.vercel.app/api/cliente');
  }

  buscarCliente(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/cliente/${id}`);
  }

  editarCliente(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/cliente/${id}`, body);
  }

  deletarCliente(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/cliente/${id}`);
  }
}