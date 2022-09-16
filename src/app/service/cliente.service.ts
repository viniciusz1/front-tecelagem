import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Cliente {
  nome: string
  cnpj: string
  id: string
}
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) {}

  cadastrarCliente(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/cliente', body);
  }

  buscarClientes(): Observable<Cliente[]>{

    return this.http.get<Cliente[]>('https://tecelagem-back-end.vercel.app/api/cliente');
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