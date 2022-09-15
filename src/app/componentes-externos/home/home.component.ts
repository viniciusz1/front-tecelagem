import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FioService } from 'src/app/service/fio.service';
import { ItensService } from 'src/app/service/item.service';
import { MalhaService } from 'src/app/service/malha.service';
import { MaquinaService } from 'src/app/service/maquina.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private fioService: FioService,
    private malhaService: MalhaService,
    private itensService: ItensService,
    private maquinaService: MaquinaService
  ) { }
  stateDetalhes = false
  tipoModalEntrada = 1
  tipo_exibicao_bloco = false

  change_to_list(){
    this.tipo_exibicao_bloco = false
  }
  change_to_card(){
    this.tipo_exibicao_bloco = true
  }

  fio = [{
    id: 1,
    descricao: "Fio Bom"
  }]

  malha = [
    {
      id: "1",
      descricao: "Malha Boa",
      valor: 200
    }
  ]

  maquina = [
    {
      id: 0, nome: "", marca: "", ano_fabricacao: "", ano_compra: "", valor_compra: 0, rpm: 0, qtd_agulha: 0, qtd_platina: 0, qtd_gaiolas: 0, qtd_cones: 0
    }
  ]

  itens = [{
    id: 0, tipo: "", quantidade: 0
  }]



  fiosFiltrados = [{
    id: 1,
    descricao: "Fio Bom"
  }];

  malhasFiltradas = [{
    id: "1",
    descricao: "Malha Boa",
    valor: 200
  }];

  maquinasFiltradas = [
    {
      id: 0, nome: "", marca: "", ano_fabricacao: "", ano_compra: "", valor_compra: 0, rpm: 0, qtd_agulha: 0, qtd_platina: 0, qtd_gaiolas: 0, qtd_cones: 0
    }
  ];

  itensFiltrados = [
    { id: 0, tipo: "", quantidade: 0 }
  ];



  textPesquisa = "";

  lista = "";

  openModalDetalhes() {
    this.stateDetalhes = !this.stateDetalhes
  }
  ngOnInit(): void {
    this.lista = this.router.url.split("/", 3)[2];
    var self = this;

    this.malha = [];
    this.fio = [];
    this.itens = [];
    this.maquina = [];

    this.malhaService.buscarMalhas().subscribe(e => {
      self.malha = Object.values(e);
      self.malhasFiltradas = this.malha;
    });

    this.fioService.buscarFios().subscribe(e => {
      self.fio = Object.values(e);
      self.fiosFiltrados = this.fio;
    })

    this.itensService.buscarItens().subscribe(e => {
      self.itens = Object.values(e);
      self.itensFiltrados = this.itens;
    })
    
    this.maquinaService.buscarMaquinas().subscribe(e => {
      self.maquina = Object.values(e);
      self.maquinasFiltradas = this.maquina;
    })

    //Preencher as listas com os dados do banco

    this.fiosFiltrados = this.fio;
    this.maquinasFiltradas = this.maquina;
    this.itensFiltrados = this.itens;
  }

  stateFio = false
  stateCadastro = false
  stateMaquina = false
  stateMalha = false
  stateItem = false
  stateEntrada = false;

  changeModalCadastroMalha() {
    this.stateMalha = !this.stateMalha
  }
  changeModalCadastroFio() {
    this.stateFio = !this.stateFio
  }
  changeModalCadastroItem() {
    this.stateItem = !this.stateItem
  }
  changeModalCadastroMaquina() {
    this.stateMaquina = !this.stateMaquina
  }
  changeModalEntrada(number: number) {
    this.tipoModalEntrada = number
    this.stateEntrada = !this.stateEntrada
  }

  filtrar() {
    var self = this;

    this.fiosFiltrados = this.fio.filter(function (a) {
      return a.descricao.toLowerCase().indexOf(self.textPesquisa.toLowerCase()) > -1
    })

    this.malhasFiltradas = this.malha.filter(function (a) {
      return a.descricao.toLowerCase().indexOf(self.textPesquisa.toLowerCase()) > -1
    })

    this.maquinasFiltradas = this.maquina.filter(function (a) {
      return a.nome.toLowerCase().indexOf(self.textPesquisa.toLowerCase()) > -1
    })

    this.itensFiltrados = this.itens.filter(function (a) {
      return a.tipo.toLowerCase().indexOf(self.textPesquisa.toLowerCase()) > -1
    })
  }
}