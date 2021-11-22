import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InitialComponent } from './initial/initial.component';
import { CadastroPacienteComponent } from './atendente/cadastro-paciente/cadastro-paciente.component';
import { MarcaConsultaComponent } from './atendente/marca-consulta/marca-consulta.component';
import { EncontrarPacienteComponent } from './atendente/encontrar-paciente/encontrar-paciente.component';
import { CadastroFuncionarioComponent } from './administrativo/cadastro-funcionario/cadastro-funcionario.component';
import { EstoqueComponent } from './farmacia/estoque/estoque.component';
import { AbastecimentoComponent } from './farmacia/abastecimento/abastecimento.component';
import { HistoricoComponent } from './farmacia/historico/historico.component';
import { GerenciarPlantoesComponent } from './administrativo/gerenciar-plantoes/gerenciar-plantoes.component';
import { EncontrarFuncionarioComponent } from './administrativo/encontrar-funcionario/encontrar-funcionario.component';
import { CadastrarUnidadeComponent } from './sistema/cadastrar-unidade/cadastrar-unidade.component';
import { CadastrarDiretorComponent } from './sistema/cadastrar-diretor/cadastrar-diretor.component';
import { ListarUnidadesComponent } from './sistema/listar-unidades/listar-unidades.component';
import { ListarDiretoresComponent } from './sistema/listar-diretores/listar-diretores.component';
import { FormHelper } from 'src/app/helpers/form.helper';
import { RegistrarVacinaComponent } from './enfermagem/registrar-vacina/registrar-vacina.component';
import { RegistrarProcedimentoComponent } from './enfermagem/registrar-procedimento/registrar-procedimento.component';
import { ListarConsultasComponent } from './medico/listar-consultas/listar-consultas.component';
import { GerarReceitaComponent } from './medico/gerar-receita/gerar-receita.component';
import { ListarConsultasOrtodontiaComponent } from './ortodontia/listar-consultas/listar-consultas/listar-consultas.component';
import { ListarConsultasPsicologiaComponent } from './psicologia/listar-consultas/listar-consultas/listar-consultas.component';
import { GerarReceitaOrtodontiaComponent } from './ortodontia/gerar-receita/gerar-receita/gerar-receita.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    InitialComponent,
    CadastroPacienteComponent,
    MarcaConsultaComponent,
    EncontrarPacienteComponent,
    CadastroFuncionarioComponent,
    EstoqueComponent,
    AbastecimentoComponent,
    HistoricoComponent,
    GerenciarPlantoesComponent,
    EncontrarFuncionarioComponent,
    CadastrarUnidadeComponent,
    CadastrarDiretorComponent,
    ListarUnidadesComponent,
    ListarDiretoresComponent,
    RegistrarVacinaComponent,
    RegistrarProcedimentoComponent,
    ListarConsultasPsicologiaComponent,
    ListarConsultasOrtodontiaComponent,
    ListarConsultasComponent,
    GerarReceitaOrtodontiaComponent,
    GerarReceitaComponent,
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxMaskModule.forRoot(),
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [
    FormHelper,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt',}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
