import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroFuncionarioComponent } from './administrativo/cadastro-funcionario/cadastro-funcionario.component';
import { EncontrarFuncionarioComponent } from './administrativo/encontrar-funcionario/encontrar-funcionario.component';
import { GerenciarPlantoesComponent } from './administrativo/gerenciar-plantoes/gerenciar-plantoes.component';
import { CadastroPacienteComponent } from './atendente/cadastro-paciente/cadastro-paciente.component';
import { EncontrarPacienteComponent } from './atendente/encontrar-paciente/encontrar-paciente.component';
import { MarcaConsultaComponent } from './atendente/marca-consulta/marca-consulta.component';
import { RegistrarProcedimentoComponent } from './enfermagem/registrar-procedimento/registrar-procedimento.component';
import { RegistrarVacinaComponent } from './enfermagem/registrar-vacina/registrar-vacina.component';
import { AbastecimentoComponent } from './farmacia/abastecimento/abastecimento.component';
import { EstoqueComponent } from './farmacia/estoque/estoque.component';
import { HistoricoComponent } from './farmacia/historico/historico.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { InitialComponent } from './initial/initial.component';
import { LoginComponent } from './login/login.component';
import { GerarReceitaComponent } from './medico/gerar-receita/gerar-receita.component';
import { ListarConsultasComponent } from './medico/listar-consultas/listar-consultas.component';
import { GerarReceitaOrtodontiaComponent } from './ortodontia/gerar-receita/gerar-receita/gerar-receita.component';
import { ListarConsultasOrtodontiaComponent } from './ortodontia/listar-consultas/listar-consultas/listar-consultas.component';
import { ListarConsultasPsicologiaComponent } from './psicologia/listar-consultas/listar-consultas/listar-consultas.component';
import { CadastrarDiretorComponent } from './sistema/cadastrar-diretor/cadastrar-diretor.component';
import { CadastrarUnidadeComponent } from './sistema/cadastrar-unidade/cadastrar-unidade.component';
import { ListarDiretoresComponent } from './sistema/listar-diretores/listar-diretores.component';
import { ListarUnidadesComponent } from './sistema/listar-unidades/listar-unidades.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sgi', 
    component: HomeComponent, 
    children: [
      {
        path: 'initial',
        component: InitialComponent,
      },
      {
        path: 'atendente',
        children: [
          {
            path: 'cadastro-paciente', 
            component: CadastroPacienteComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'encontrar-paciente',
            component: EncontrarPacienteComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'marca-consulta',
            component: MarcaConsultaComponent,
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'administrativo',
        children: [
          {
            path: 'cadastro-funcionario',
            component: CadastroFuncionarioComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'gerenciar-plantoes',
            component: GerenciarPlantoesComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'encontrar-funcionario',
            component: EncontrarFuncionarioComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'farmacia',
        children: [
          {
            path: 'abastecimento',
            component: AbastecimentoComponent,
            canActivate: [AuthGuard]
            
          },
          {
            path: 'estoque',
            component: EstoqueComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'historico',
            component: HistoricoComponent,
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'sistema',
        children: [
          {
            path: 'cadastrar-unidade',
            component: CadastrarUnidadeComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'cadastrar-diretor',
            component: CadastrarDiretorComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'listar-unidades',
            component: ListarUnidadesComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'listar-diretores',
            component: ListarDiretoresComponent,
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'medico',
        children: [
          {
            path: 'listar-consultas',
            component: ListarConsultasComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'gerar-receita',
            component: GerarReceitaComponent,
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'psicologia',
        children: [
          {
            path: 'listar-consultas',
            component: ListarConsultasPsicologiaComponent,
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'ortodontia',
        children: [
          {
            path: 'listar-consultas',
            component: ListarConsultasOrtodontiaComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'gerar-receita',
            component: GerarReceitaOrtodontiaComponent,
            canActivate: [AuthGuard]
          },
        ]
      },
      {
        path: 'enfermagem',
        children: [
          {
            path: 'registrar-vacina',
            component: RegistrarVacinaComponent,
            canActivate: [AuthGuard]
          },
          {
            path: 'registrar-procedimento',
            component: RegistrarProcedimentoComponent,
            canActivate: [AuthGuard]
          }
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
