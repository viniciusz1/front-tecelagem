import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { EntradaFioService } from '../service/entradaFio.service';
import { FioService } from '../service/fio.service';
import { ItensService } from '../service/item.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
})
export class EntradaComponent implements OnInit {
  @Output() changeModal = new EventEmitter();
  @Input() tipo = 2;
  constructor(
    private itemsService: ItensService,
    private entradaFioService: EntradaFioService
    ) {}
  fecharModal() {
    this.changeModal.emit();
  }

  quantidade = 1;
  fornecedor = '';
  peso = 1;
  valor = 1;
  descricao = '';
  rolosCaixa = 0;
  nome = "";

  notaFiscal = "";

  //Inserir um novo item
  //Inserir a entrada_item
  //Verificar se o item existe
  //Caso existir, somar a quantidade
  //Cadastrar nota fiscal

  entradaItens() {
    if (this.tipo == 1) {
      console.log(this.itemsService.cadastrarItem({
        quantidade: this.quantidade,
        tipo: this.nome
      }));
    } else if(this.tipo == 2){
      this.entradaFioService.cadastrarEntradaFio({
        clienteId: this.nome,
        quantidade: this.quantidade,
        valor: this.valor,
        fornecedorId: this.fornecedor,
        notaFiscalId: this.notaFiscal,
        qtdCaixa: this.quantidade,
        rolosPorCaixa: this.rolosCaixa
      })
    }
  }

  mudarQtd(opcao: number) {
    if(opcao == 1) {
      if(this.quantidade > 1) {
        this.quantidade--;
      }
    } else {
      this.quantidade++;
    }
  }

  mudarValor(opcao: number) {
    if(opcao == 1) {
      if(this.valor > 1) {
        this.valor--;
      }
    } else {
      this.valor++;
    }
  }

  mudarRolos(opcao: number) {
    if(opcao == 1) {
      if(this.rolosCaixa > 1) {
        this.rolosCaixa--;
      }
    } else {
      this.rolosCaixa++;
    }
  }

  ngOnInit(): void {}
}
