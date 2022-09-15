import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotaFiscalService {

  constructor(private http: HttpClient) {}

  cadastrarNotaFiscal(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/nota-fiscal', body);
  }

  buscarNotasfiscais(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/nota-fiscal');
  }

  buscarNotaFiscal(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/nota-fiscal/${id}`);
  }

  editarNotaFiscal(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/nota-fiscal/${id}`, body);
  }

  deletarNotaFiscal(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/nota-fiscal/${id}`);
  }
}