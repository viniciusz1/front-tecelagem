import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaquinaService } from '../service/maquina.service';

@Component({
  selector: 'app-cadastroMaquinas',
  templateUrl: './cadastro-maquinas.component.html',
  styleUrls: ['./cadastro-maquinas.component.css']
})
export class cadastroMaquinasComponent implements OnInit {
  @Output() modalCadastroMaquina = new EventEmitter()

  constructor(private maquinaService: MaquinaService) { }
  fechaModal(){
    this.modalCadastroMaquina.emit()
  }
  ngOnInit(): void {


  }
  nome=""
  marca=""
  anoFabricacao=0
  anoCompra=0
  quantidadeAgulhas=0
  quantidadePlatinas=0
  quantidadeGaiolas=0
  quantidadeCones=0
  valor=0
  rmp=0

  enviarDados(){
    if(this.nome != "" && this.marca != "" && this.anoFabricacao > 0 && this.anoCompra > 0 &&
    this.quantidadeAgulhas > 0 && this.quantidadeCones > 0 && this.quantidadeGaiolas > 0 &&
    this.quantidadePlatinas > 0 && this.valor > 0 && this.rmp > 0){
    this.maquinaService.cadastrarMaquina({nome: this.nome, marca: this.marca, 
      anoFabricacao: this.anoFabricacao + "", anoCompra: this.anoCompra + "", qtdAgulha: this.quantidadeAgulhas  + "", 
      qtdPlatina:this.quantidadePlatinas + "", qtdGaiolas:this.quantidadeGaiolas + "",
      valorCompra:this.valor + "", qtdCones: this.quantidadeCones + "", rpm: this.rmp + ""})
      .subscribe(e => {
        console.log(e)
        alert("Item cadastrado com Sucesso!")
      })
    }else{
      alert("É necessario preencher todos os campos corretamente!")
    }
  }

  tipo = 1;






}