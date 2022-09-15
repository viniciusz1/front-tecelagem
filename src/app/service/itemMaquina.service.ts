import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemMaquinaService {

  constructor(private http: HttpClient) {}

  cadastrarItemMaquina(body: {}) {
    return this.http.post('https://tecelagem-back-end.vercel.app/api/item-maquina', body);
  }

  buscarItemMaquina(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/item-maquina');
  }

  buscarItemMaquinaId(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/item-maquina/${id}`);
  }
}
