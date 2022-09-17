import { Component, Input, OnInit, Output } from '@angular/core';
import { FioService } from '../service/fio.service';

@Component({
  selector: 'app-fio',
  templateUrl: './fio.component.html',
  styleUrls: ['./fio.component.css']
})
export class FioComponent implements OnInit {

  @Input() fio = {id: 0, descricao: ""}
  @Input() tipo_exibicao_bloco = true;
  constructor(private fioService: FioService) { }
  remove(){

    this.fioService.removerFios(this.fio.id)
    .subscribe({next: e => {
      location.reload()
    }})
  } 
  ngOnInit(): void {
  }

}
