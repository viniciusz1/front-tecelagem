import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItensService } from '../service/item.service';

@Component({
  selector: 'app-cadastroItem',
  templateUrl: './cadastroItem.component.html',
  styleUrls: ['./cadastroItem.component.css']
})
export class cadastroItemComponent implements OnInit {
  @Output() modalCadastroItem = new EventEmitter()

  constructor(
    private itensService: ItensService
  ) { }
  fechaModal(){
    this.modalCadastroItem.emit()
  }
  ngOnInit(): void {



  }
  tipo = 1;

  quantidade = 0;
  nomeItem = "";
  tipoItem = "";

  cadastrarItem(){
    this.itensService.cadastrarItem({quantidade: this.quantidade, tipo: this.tipoItem, nome: this.nomeItem})
    .subscribe(e => console.log(e));
    alert("Item cadastrado com sucesso!")
  }





}