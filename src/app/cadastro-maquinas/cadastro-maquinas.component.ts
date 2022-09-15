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
  anoFabricacao=""
  anoCompra=""
  quantidadeAgulhas=0
  quantidadePlatinas=0
  quantidadeGaiolas=0
  quantidadeCones=0
  valor=0
  rmp=0

  enviarDados(){
    this.maquinaService.cadastrarMaquina({nome: this.nome, marca: this.marca, 
      anoFabricacao: this.anoFabricacao + "", anoCompra: this.anoCompra + "", qtdAgulha: this.quantidadeAgulhas  + "", 
      qtdPlatina:this.quantidadePlatinas + "", qtdGaiolas:this.quantidadeGaiolas + "",
      valorCompra:this.valor + "", qtdCones: this.quantidadeCones + "", rpm: this.rmp + ""})
      .subscribe(e => {
        console.log(e)
      })
  }

  tipo = 1;






}