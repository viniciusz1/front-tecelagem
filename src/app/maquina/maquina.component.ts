import { Component, OnInit, Input } from '@angular/core';
import { MaquinaService } from '../service/maquina.service';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {

  @Input() maquina = {id: 0, nome: "", marca: "", anoFabricacao: "", anoCompra: "", valorCompra: 0, rpm: 0, qtdAgulha: 0, qtdPlatina: 0, qtdGaiolas: 0, qtdCones: 0}
  @Input() tipo_exibicao_bloco = true;
  detalhes = false;
  constructor(private maquinasService: MaquinaService) { }

  ngOnInit(): void {
  }
  remove(){
    console.log(this.maquina.id)
    this.maquinasService.deletarMaquina(this.maquina.id)
    .subscribe({next: e => {
      location.reload()
    }})
  }
  abrirDetalhes() {
    this.detalhes = true;
  }

  fecharDetalhes() {
    this.detalhes = false;
  }
  
}
