import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { SaidaMalhaService } from '../service/saidaMalha.service';

@Component({
  selector: 'app-malha',
  templateUrl: './malha.component.html',
  styleUrls: ['./malha.component.css']
})
export class MalhaComponent implements OnInit {

  @Input() malha = { id: "0", descricao: "", valor: 0 };

  constructor(private clienteService : ClienteService, private malhaService : SaidaMalhaService) { }

  @Input() tipo_exibicao_bloco = true;
  modalVenda = false;
  pesoTotal = 0;
  qualidade = "";
  cliente = "";
  nota = "";
  quantidade = 1;

  sacola = [{ id: "0", descricao: "a", valor: 3 }]

  ngOnInit(): void {
  }

  abrirModal() {
    this.modalVenda = true;
  }

  fechaModal() {
    this.modalVenda = false;
  }

  modificaQtd(opcao: number) {
    if (opcao == 1) {
      if (this.quantidade > 1) {
        this.quantidade--;
      }
    } else {
      this.quantidade++;
    }
  }

  vender() {

    if (this.cliente == "") {
      alert("Preencha o Cliente!")
    } else if (this.nota == "") {
      alert("Preencha a nota fiscal!");
    } else {
      let clienteID = "";

      try {
        this.clienteService.buscarClientes().subscribe(e => {
          let listaClientes = Object.values(e);
          console.log(listaClientes);

          for (const cliente of listaClientes) {
            if(cliente.cnpj == this.cliente) {
              clienteID = cliente.id;
            }
          }

          if(!clienteID) {
            alert("Cliente Inválido!");
            return;
          }

          try {
            this.malhaService.cadastrarSaidaMalha({qtd_rolos: this.quantidade, peso_total: this.pesoTotal, qualidade_malha: this.qualidade, valor_saida: (this.quantidade * this.malha.valor), cliente_codigo: clienteID, nota_fiscal_codigo: this.nota, malha_codigo: this.malha.id}).subscribe();
          } catch (erro) {
            alert("Erro interno no Sistema!");
            return;
          }
          this.modalVenda = false;
          alert("Venda Efetuada com Sucesso!");
        })
      } catch(erro) {
        alert("Erro interno no Sistema!")
      }
    }
  }

  getPreco(valor: number) {
    return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  adicionaSacola() {
    this.modalVenda = false;
    this.sacola = JSON.parse(localStorage.getItem('carrinho') as string) || [];
    let malhaNova = {
      id: this.malha.id, descricao: this.malha.descricao, valor: this.malha.valor, quantidade: this.quantidade
    }
    this.sacola.push(malhaNova);
    localStorage.setItem('carrinho', JSON.stringify(this.sacola));
  }


}
