import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MalhaService } from '../service/malha.service';

@Component({
  selector: 'app-cadastroMalha',
  templateUrl: './cadastroMalha.component.html',
  styleUrls: ['./cadastroMalha.component.css']
})

export class CadastroMalhaComponent implements OnInit {
  @Output() modalCadastroMalha = new EventEmitter()
  constructor(private malhaService: MalhaService) { }
  nome = "";
  quantidade = "";
  descricao = "";
  fios = "";

  fechaModal(){
    this.modalCadastroMalha.emit()
  }

  enviarCadastro(){
    // this.malhaService.buscarMalhas();
    let malhaCadastrada;
    this.malhaService.cadastrarMalha({descricao: this.nome, valor: this.quantidade}).subscribe(e => malhaCadastrada = Object.values(e));
    console.log(malhaCadastrada);
  }

  ngOnInit(): void {
  }

  tipo = 2;
}
