import { Component, OnInit, Input } from '@angular/core';
import { MaquinaService } from '../service/maquina.service';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {

  @Input() maquina = {id: 0, nome: "", marca: "", ano_fabricacao: "", ano_compra: "", valor_compra: 0, rpm: 0, qtd_agulha: 0, qtd_platina: 0, qtd_gaiolas: 0, qtd_cones: 0}
  @Input() tipo_exibicao_bloco = true;
  detalhes = false;
  constructor(private maquinasService: MaquinaService) { }

  ngOnInit(): void {
  }
  remove(){
    this.maquinasService.removerMaquinas(this.maquina.id)
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
