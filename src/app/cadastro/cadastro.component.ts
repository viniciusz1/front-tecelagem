import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { FuncionarioService } from '../service/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private funcionarioService: FuncionarioService) { }

  olho1: number = 1;
  olho2: number = 1;

  usuario: string = "";
  cnpj: string = "";
  cpf: string = "";
  dataNascimento: Date = new Date();
  turno: string = "";
  salario: number = 0;

  senhaUser: string = "";
  repetirSenhaUser: string = "";

  senhaIncorreta: number = 0;
  dadosIncorretos: number = 0;
  rota = "";
  tipoTela = false;
  ngOnInit() {
    this.rota = "";
    this.rota = this.router.url;
    if (this.rota == '/home/cadastro/cliente') {
      this.tipoTela = false
    } else {
      this.tipoTela = true
    }
    console.log(this.rota)
  }

  entrar() {
    console.log("a")
    this.router.navigate(['']);
  }

  cadastrar() {
    if (this.cnpj && this.usuario) {
      localStorage.setItem('cadastro', '1');
      const cliente = {
        nome: this.usuario,
        cnpj: this.cnpj
      }
      console.log(cliente.nome);
      console.log(cliente.cnpj);

      this.clienteService.cadastrarCliente(cliente).subscribe((e) => {
        console.log(e);
      });
    } else if (this.salario && this.cpf && this.usuario && this.dataNascimento && this.turno &&
      this.senhaUser && this.repetirSenhaUser) {
      if (this.senhaUser == this.repetirSenhaUser) {
        const funcionario = {
          nome: this.usuario,
          cpf: this.cpf,
          dataNascimento: this.dataNascimento,
          turno: this.turno,
          senha: this.senhaUser,
          salario: this.salario
        }
        console.log(funcionario.cpf);
        console.log(funcionario.nome);

        this.funcionarioService.cadastrarFuncionario(funcionario).subscribe((e) => {
          console.log(e);
        });
      }
    } else {
      this.dadosIncorretos = 1;
      setTimeout(() => {
        this.dadosIncorretos = 0;
      }, 5000)
    }
  }

  trocarOlho(input: number) {

    let divOlho: HTMLImageElement;
    let input2: HTMLInputElement

    switch (input) {
      case 1:
        divOlho = document.querySelector("#olho1") as HTMLImageElement;
        input2 = document.querySelector("#inputSenha1") as HTMLInputElement;
        if (this.olho1 == 1) {
          this.olho1 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho1 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
      case 2:
        divOlho = document.querySelector("#olho2") as HTMLImageElement;
        input2 = document.querySelector("#inputSenha2") as HTMLInputElement
        if (this.olho2 == 1) {
          this.olho2 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho2 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
    }
  }

  fechar() {
    this.senhaIncorreta = 0;
  }

}