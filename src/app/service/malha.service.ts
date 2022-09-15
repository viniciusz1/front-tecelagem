import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MalhaService {

  constructor(private http: HttpClient) {}

  cadastrarMalha(body: {}) {
    console.log(body);
    return this.http.post('https://tecelagem-back-end.vercel.app/api/malha', body);
  }

  buscarMalhas(){
    return this.http.get('https://tecelagem-back-end.vercel.app/api/malha');
  }

  buscarMalhaId(id: String){
    return this.http.get(`https://tecelagem-back-end.vercel.app/api/malha/${id}`);
  }
}
