import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalhes-maquina',
  templateUrl: './detalhes-maquina.component.html',
  styleUrls: ['./detalhes-maquina.component.css']
})
export class DetalhesMaquinaComponent implements OnInit {
    @Output() statusModalDetalhes = new EventEmitter;
  constructor() { }
  close(){
      this.statusModalDetalhes.emit()
  }
  ngOnInit(): void {
  }

}
