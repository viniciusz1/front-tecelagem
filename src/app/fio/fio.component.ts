import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fio',
  templateUrl: './fio.component.html',
  styleUrls: ['./fio.component.css']
})
export class FioComponent implements OnInit {

  @Input() fio = {id: 0, descricao: ""}
  @Input() tipo_exibicao_bloco = true;
  constructor() { }

  ngOnInit(): void {
  }

}
