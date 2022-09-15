import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Usuario } from '../shared/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  
     lista = [
    {nome: "Otavio", usuario: "otavio", senha: "123"},
    {nome: "Vinicius", usuario: "vinicius", senha: "123"},
    {nome: "Camilly", usuario: "camilly", senha: "123"},
    {nome: "Felipe", usuario: "felipe", senha: "123"},
    {nome: "Matheus", usuario: "matheus", senha: "123"},
    {nome: "Eduarda", usuario: "eduarda", senha: "123"},
    {nome: "Diego", usuario: "diego", senha: "123"},
    {nome: "Gustavo", usuario: "gustavo", senha: "123"},
  ]

  getListaUser(){
    return this.lista
 }
 addUser(usuario: {nome: "", usuario: "", senha: ""}){
  this.lista.push(usuario)
  console.log(this.lista)
 }

 //  Pra depois
//  setUser(usuario: string){
//   let index =  this.lista.findIndex(listas => listas.usuario == usuario);
//   let us = this.lista[index];
//   let nome = us.nome;
//   let nick = us.usuario;
//   let senha = us.senha;
//   let user = {nome, nick, senha};
//   this.lista[index] = user;
//   console.log(this.lista)
//  }
}