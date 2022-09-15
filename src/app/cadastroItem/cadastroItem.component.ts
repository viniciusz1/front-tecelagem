import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastroItem',
  templateUrl: './cadastroItem.component.html',
  styleUrls: ['./cadastroItem.component.css']
})
export class cadastroItemComponent implements OnInit {
  @Output() modalCadastroItem = new EventEmitter()

  constructor() { }
  fechaModal(){
    this.modalCadastroItem.emit()
  }
  ngOnInit(): void {


  }
  tipo = 1;






}