import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { SaidaMalhaService } from '../service/saidaMalha.service';

@Component({
  selector: 'app-sacola',
  templateUrl: './sacola.component.html',
  styleUrls: ['./sacola.component.css']
})
export class SacolaComponent implements OnInit {

  constructor(private router: Router, private malhaService : SaidaMalhaService, private clienteService : ClienteService) {
    var self = this;
    if(localStorage.getItem("carrinho")) {
      this.listaSacola = JSON.parse(localStorage.getItem('carrinho') as string) || [];
    } else {
      this.listaSacola = [];
    }
    
    window.addEventListener("beforeunload", function () {
      localStorage.setItem('carrinho', JSON.stringify(self.listaSacola));
    });
  }

  modalVenda = false;
  valorTotal = 0;

  pesoTotal = 0;
  qualidade = "";
  cliente = "";
  nota = "";

  listaSacola = [
    {
      id: "1",
      descricao: "Camisa Boa",
      quantidade: 1,
      valor: 20
    },
  ]

  ngOnInit(): void {
    this.calculaValor();
  }

  calculaValor() {
    this.valorTotal = 0;
    var self = this;
    this.listaSacola.forEach((e) => {
      self.valorTotal += e.valor * e.quantidade;
    })
  }

  excluirMalha(index: number) {
    this.listaSacola.splice(index, 1);
    this.calculaValor();
    localStorage.setItem('carrinho', JSON.stringify(this.listaSacola));
  }

  modificaQtd(opcao: number, index: number) {
    switch(opcao) {
      case 1:
        if(this.listaSacola[index].quantidade > 1) {
          this.listaSacola[index].quantidade--;
        }
        break;
      case 2:
        this.listaSacola[index].quantidade++;
        break;
    }
    localStorage.setItem('carrinho', JSON.stringify(this.listaSacola));
    this.calculaValor();
  }

  abrirModalVenda() {
    if(this.listaSacola.length > 0) {
      this.modalVenda = true;
    }
  }

  fechaModal() {
    this.modalVenda = false;
  }

  vender() {
    for (const malha of this.listaSacola) {
    }

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
            for (const malha of this.listaSacola) {
              this.malhaService.cadastrarSaidaMalha({qtd_rolos: malha.quantidade, peso_total: this.pesoTotal, qualidade_malha: this.qualidade, valor_saida: (malha.quantidade * malha.valor), cliente_codigo: clienteID, nota_fiscal_codigo: this.nota, malha_codigo: malha.id}); 
            }
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

    localStorage.removeItem('carrinho')
    this.router.navigate(['/home/tela-inicial']);
  }

}
