import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { ProducaoService } from 'src/app/service/producao.service';

@Component({
  selector: 'app-detalhes-maquina',
  templateUrl: './detalhes-maquina.component.html',
  styleUrls: ['./detalhes-maquina.component.css']
})
export class DetalhesMaquinaComponent implements OnInit {
  
  @Output() statusModalDetalhes = new EventEmitter;
  @Input() maquina = {id: 0, nome: "", marca: "", ano_fabricacao: "", ano_compra: "", valor_compra: 0, rpm: 0, qtd_agulha: 0, qtd_platina: 0, qtd_gaiolas: 0, qtd_cones: 0};
  peso = undefined;
  defeito = "";
  cliente = "";

  constructor(private producaoService : ProducaoService, private clienteService : ClienteService, private funcionarioService : FuncionarioService) { }
  
  close() {
    this.statusModalDetalhes.emit()
  }

  ngOnInit(): void {
  }

  cadastrarProducao() {
    try {
      let clienteID = 0;
      let funcionarioID = 0;

      this.clienteService.buscarClientes().subscribe(e => {
        let listaClientes = Object.values(e);

        for (const cliente of listaClientes) {
          if(cliente.cnpj == this.cliente) {
            clienteID = parseInt(cliente.id);
          }
        }
        if(!clienteID) {
          alert("Cliente Inválido!");
          return;
        }

        let nomeFuncionario = localStorage.getItem("NOME");
        this.funcionarioService.buscarFuncionarios().subscribe(a => {
          let listaFuncionarios = Object.values(a);

          for (const funcionario of listaFuncionarios) {
            if(funcionario.nome == nomeFuncionario) {
              funcionarioID = funcionario.id;
            }
          }

          this.producaoService.cadastrarProducao({peso_rolo: this.peso, defeito: this.defeito, cliente: clienteID, funcionario_codigo: funcionarioID, maquina: this.maquina.id, data: new Date()}).subscribe();
          this.statusModalDetalhes.emit();
        })
      });
    } catch (erro) {
      alert("Erro interno no Sistema!")
    }
  }

}
