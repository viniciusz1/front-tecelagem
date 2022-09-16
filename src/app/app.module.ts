import { HomeComponent } from './componentes-externos/home/home.component';
import { DetalhesMaquinaComponent } from './maquina/detalhes-maquina/detalhes-maquina.component';
import { FioComponent } from './fio/fio.component';
import { MaquinaComponent } from './maquina/maquina.component';
import { MalhaComponent } from './malha/malha.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentesExternosComponent } from './componentes-externos/componentes-externos.component';
import { HeaderComponent } from './componentes-externos/header/header.component';
import { SidenavComponent } from './componentes-externos/sidenav/sidenav.component';
import { RotasModule } from './rotas.module';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntradaComponent } from './entrada/entrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItensComponent } from './itens/itens.component';

import { HistoricoEntradaComponent } from './historico-entrada/historico-entrada.component';
import { HistoricoProducaoComponent } from './historico-producao/historico-producao.component';
import { SacolaComponent } from './sacola/sacola.component';

import { HttpClientModule } from  '@angular/common/http';
import { CadastroFioComponent } from './cadastroFio/cadastroFio.component';
import { cadastroItemComponent } from './cadastroItem/cadastroItem.component';
import { CadastroMalhaComponent } from './cadastroMalha/cadastroMalha.component';
import { cadastroMaquinasComponent } from './cadastro-maquinas/cadastro-maquinas.component';
import CheckLogged from './checklogged';
import { FioService } from './service/fio.service';
import { EntradaFioService } from './service/entradaFio.service';
import { EntradaMateriais } from './service/entradaMateriais.service';
import { FioMalha } from './service/fioMalha.service';
import { Fornecedor } from './service/fornecedor.service';
import { FuncionarioService } from './service/funcionario.service';
import { ItensService } from './service/item.service';
import { ItemMaquinaService } from './service/itemMaquina.service';
import { MalhaService } from './service/malha.service';
import { MalhaClienteService } from './service/malhaCliente.service';
import { MaquinaService } from './service/maquina.service';
import { MaquinaMalhaService } from './service/maquinaMalha.service';
import { MaquinaFioService } from './service/maquinFio.service';
import { NotaFiscalService } from './service/notaFiscal.service';
import { ProducaoService } from './service/producao.service';
import { SaidaMalhaService } from './service/saidaMalha.service';
import { UsuariosService } from './service/usuario.service';
import { ClienteService } from './service/cliente.service';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CadastroComponent,
    HeaderComponent,
    SidenavComponent,
    ComponentesExternosComponent,
    EntradaComponent,
    SacolaComponent,
    ItensComponent,
    MalhaComponent,
    MaquinaComponent,
    FioComponent,
    DetalhesMaquinaComponent,
    HistoricoEntradaComponent,
    HistoricoProducaoComponent,
    SacolaComponent,
    HomeComponent,
    CadastroFioComponent,
    cadastroItemComponent,
    CadastroMalhaComponent,
    cadastroMaquinasComponent,
    ClientesComponent
    
  ],
  imports: [
    BrowserModule,
    RotasModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CheckLogged,
    EntradaFioService,
    EntradaMateriais,
    FioMalha,
    FioService,
    Fornecedor,
    FuncionarioService,
    ItensService,
    ItemMaquinaService,
    MalhaService,
    MalhaClienteService,
    MaquinaService,
    MaquinaMalhaService,
    MaquinaFioService,
    NotaFiscalService,
    ProducaoService,
    SaidaMalhaService,
    UsuariosService,
  ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
