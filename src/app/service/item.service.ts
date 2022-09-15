import { Injectable } from '@angular/core';
// import { jsonpFactory } from '@angular/http/src/http_module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItensService {

  constructor(private http: HttpClient) {}

  cadastrarItem(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/item', body);
  }

  buscarItens(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/item');
  }

  buscarItem(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/item/${id}`);
  }

  editarItem(id: String, body: {}){
    return this.http.put(`https://tecelagem-back-end.vercel.app/api/item/${id}`, body);
  }

  deletarItem(id: String){
    return this.http.delete(`https://tecelagem-back-end.vercel.app/api/item/${id}`);
  }

}
