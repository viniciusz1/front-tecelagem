import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
interface Cliente {
  nome: string
  cnpj: string
  id: string
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }
  listaClientes: Cliente[] =[]
  ngOnInit(): void {
    this.clienteService.buscarClientes().subscribe({next: e =>{
      this.listaClientes = e
    }})
  }

}
