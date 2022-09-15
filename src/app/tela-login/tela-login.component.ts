import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from '../service/funcionario.service';
import { UsuariosService } from '../service/usuario.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  emailUser: string = "";
  senhaUser: string = "";
  senhaIncorreta: number = 0;

  cadastro: number = 0;
  requisicaoSenha: number = 0;

  senha1: number = 0;
  senha2: number = 0;
  senha3: number = 0;

  senhaNova: string = "";
  senhaNova2: string = "";

  tempo = 300;
  tempoString = "5m";
  intervaloTimer: any;

  olho1: number = 1;
  olho2: number = 1;
  olho3: number = 1;

  constructor(private router: Router, private route: ActivatedRoute,
     private usuariosService: UsuariosService, private funcionarioService: FuncionarioService ) {
    if (localStorage.getItem('cadastro')) {
      localStorage.removeItem('cadastro');
      this.cadastro = 1;
    }
  }

  ngOnInit() {
    
    if (localStorage.getItem('usuario')) {
      this.navegacaoTipo();
    }
    if (this.cadastro == 1) {
      this.modalCadastro();
    }
    localStorage.removeItem('USUARIO');
    localStorage.removeItem('SENHA');
  }

  lembrar() {
    if (localStorage.getItem('lembrarSenha') == '0' || !localStorage.getItem('lembrarSenha')) {
      localStorage.setItem('lembrarSenha', '1');
    } else {
      localStorage.setItem('lembrarSenha', '0')
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }

  fechar() {
    this.cadastro = 0;
    this.requisicaoSenha = 0;
    this.senhaIncorreta = 0;
  }

  esqueciASenha() {
    this.senha1 = 1;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '0.5';
  }

  modalCadastro() {
    setTimeout(() => {
      this.cadastro = 0;
    }, 5000);
  }

  modalSenha() {
    setTimeout(() => {
      this.requisicaoSenha = 0;
    }, 5000);
  }

  fechar2() {
    this.senha1 = 0;
    this.senha2 = 0;
    this.senha3 = 0;
    this.senhaNova = "";
    this.senhaNova2 = "";
    if (this.intervaloTimer) {
      clearInterval(this.intervaloTimer);
    }
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '1';
  }

  esqueciSenha2() {
    this.senha1 = 0;
    this.senha2 = 1;
    this.timer();
  }

  ativarCod2() {
    let elementoAtual = document.querySelector("#cod1") as HTMLInputElement;
    if (elementoAtual.value != "") {
      let elemento = document.querySelector("#cod2") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod3() {
    let elementoAtual = document.querySelector("#cod2") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod1") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod3") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod4() {
    let elementoAtual = document.querySelector("#cod3") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod2") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod4") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod5() {
    let elementoAtual = document.querySelector("#cod4") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod3") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod5") as HTMLInputElement;
      elemento.focus();
    }
  }
  ativarCod6() {
    let elementoAtual = document.querySelector("#cod5") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod4") as HTMLInputElement;
      elemento.focus();
    } else {
      let elemento = document.querySelector("#cod6") as HTMLInputElement;
      elemento.focus();
    }
  }
  voltarCodigo() {
    let elementoAtual = document.querySelector("#cod6") as HTMLInputElement;
    if (elementoAtual.value == "") {
      let elemento = document.querySelector("#cod5") as HTMLInputElement;
      elemento.focus();
    }
  }

  timer() {
    this.tempo = 300;
    this.tempoString = "5m restantes";
    this.intervaloTimer = setInterval(() => {
      this.tempo--;
      if (this.tempo % 60 == 0 && this.tempo != 0) {
        this.tempoString = this.tempo / 60 + "m restantes";
      } else if (this.tempo > 60) {
        this.tempoString = ((this.tempo - this.tempo % 60) / 60) + "m e " + this.tempo % 60 + "s restantes";
      } else if (this.tempo < 0) {
        this.tempoString = "Código Expirado"
        clearInterval(this.intervaloTimer);
      } else {
        this.tempoString = this.tempo + "s restantes";
      }
    }, 1000);
  }

  esqueciSenha3() {
    this.senha2 = 0
    this.senha3 = 1;
  }

  enviarNovaSenha() {
    this.senha3 = 0;
    let divPrincipal = document.querySelector('.divPrincipal') as HTMLElement;
    divPrincipal.style.opacity = '1';

    if (this.intervaloTimer) {
      clearInterval(this.intervaloTimer);
    }

    this.requisicaoSenha = 1;
    this.modalSenha();
  }

  trocarOlho(input: number) {

    let divOlho: HTMLImageElement;
    let input2: HTMLInputElement;

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
      case 3:
        divOlho = document.querySelector("#olho3") as HTMLImageElement;
        input2 = document.querySelector("#inputSenha3") as HTMLInputElement;
        if (this.olho3 == 1) {
          this.olho3 = 0;
          divOlho.src = "../../../assets/olho-aberto.png";
          input2.type = 'text';
        } else {
          this.olho3 = 1;
          divOlho.src = "../../../assets/olho-fechado.png";
          input2.type = 'password';
        }
        break;
    }
  }

  usuario = "";
  senha = "";
  // funcionario = [
  //   {
  //     id: "1",
  //     Nome: "Leo",
  //     CNPJ: "1243",
  //     Nascimento: Date,
  //     Turno: "Noturno", 
  //     Senha: "123",
  //     Confirmar: "123"

  //   }
  // ]
  // funcionarioFiltrado = [{
  //   // id: "1",
  //   // descricao: "Malha Boa",
  //   // valor: 200
  // }];
  login() {
    //Fazer verificação de login com API
    // let funcionarios;
    if(this.usuario == "" || this.senha == ""){
      alert('É necessario preencher todos os campos!');
    }else{
    this.funcionarioService.buscarFuncionarios().subscribe(e => {
      let funcionarios = Object.values(e);
      console.log(funcionarios);
      let existe = true;
      for(const funcionario of funcionarios){
        if(funcionario.nome == this.usuario && funcionario.senha == this.senha){
          localStorage.setItem('USUARIO', this.usuario);
          localStorage.setItem('SENHA', this.senha);
          this.router.navigate(["home/tela-inicial"]);
          existe = false;
        }
      }
      if(existe){
        alert('Usuário não cadastrado!');
      }
    });
  }
  
    
  }

  navegacaoTipo() {
    if (localStorage.getItem('usuario') == '1') {
      this.router.navigate(['/professor'])
    } else if (localStorage.getItem('usuario') == '2' || localStorage.getItem('usuario') == '3') {
      this.router.navigate(['/atendente']);
    } else if (localStorage.getItem('usuario') == '4') {
      this.router.navigate(['/supervisor'])
    }
  }

}
