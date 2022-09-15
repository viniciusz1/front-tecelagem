import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EntradaFioService } from '../service/entradaFio.service';
import { EntradaMateriais } from '../service/entradaMateriais.service';

interface Item {
  descricao: string;
  fornecedorId: string;
  id: string;
  itemId: string;
  notaFiscalId: number;
  quantidade: number;
  valorTotalGasto: number;
}

interface Fio {
  clienteId: string
  fioId: string
  fornecedorId: string
  id: string
  notaFiscalId: string
  peso: number
  precoNotaFiscal: number
  qtdCaixa: number
  rolosPorCaixa: number
}

@Component({
  selector: 'app-historico-entrada',
  templateUrl: './historico-entrada.component.html',
  styleUrls: ['./historico-entrada.component.css']
})
export class HistoricoEntradaComponent implements OnInit {
  @Output() statusModalDetalhes = new EventEmitter;

  constructor(
    private entradaFio: EntradaFioService,
    private entradaMaterial: EntradaMateriais
  ) { }
  
  listaFios: Fio[] = []
  listaMateriais: Item[] = []

  close(){
    this.statusModalDetalhes.emit()
  }

  ngOnInit(): void {
    this.entradaFio.buscarEntradaFio()
      .subscribe((e: Fio[]) => { 
        this.listaFios = e
        console.log(e);
        
      })
    this.entradaMaterial.buscarEntradaMateriais()
      .subscribe((e: Item[]) => { 
        this.listaMateriais = e
        console.log(e);
      })
  }

}

