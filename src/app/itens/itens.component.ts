import { Component, OnInit, Input } from '@angular/core';
import { ItensService } from '../service/item.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  @Input() item = {id: 0, tipo: "", quantidade: 0}
  @Input() tipo_exibicao_bloco = true;
  constructor(private itensService: ItensService) { }
  remove(){

    this.itensService.deletarItem(this.item.id)
    .subscribe({next: e => {
      location.reload()
    }})
  }
  ngOnInit(): void {
  }

}
