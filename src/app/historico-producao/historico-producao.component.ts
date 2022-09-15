import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-historico-producao',
  templateUrl: './historico-producao.component.html',
  styleUrls: ['./historico-producao.component.css']
})
export class HistoricoProducaoComponent implements OnInit {
    @Output() statusModalDetalhes = new EventEmitter;
  constructor() { }
    close(){
        this.statusModalDetalhes.emit()
    }
  ngOnInit(): void {
  }

}
