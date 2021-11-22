import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItens: Array<Menu>;

  constructor(
    private router: Router
  ) {
    this.menuItens = JSON.parse(sessionStorage.getItem('menu')!);
    // this.menuItens = [
      //   {
      //     name: 'Início',
      //     class: 'home',
      //     route: 'initial'
      //   },
      // {
      //   name: 'Cadastro de paciente',
      //   class: 'person_add',
      //   route: 'atendente/cadastro-paciente'
      // },
      // {
      //   name: 'Marcação de consulta',
      //   class: 'calendar_today',
      //   route: 'atendente/marca-consulta'
      // },
      // {
      //   name: 'Encontrar Paciente',
      //   class: 'search',
      //   route: 'atendente/encontrar-paciente'
      // },
      // {
      //   name: 'Encontrar Funcionário',
      //   class: 'search',
      //   route: 'administrativo/encontrar-funcionario'
      // },
      // {
      //   name: 'Cadastro de Funcionário',
      //   class: 'person_add',
      //   route: 'administrativo/cadastro-funcionario'
      // },
      // {
      //   name: 'Cadastrar Unidade',
      //   class: 'app_registration',
      //   route: 'sistema/cadastrar-unidade'
      // },
      // {
      //   name: 'Listar Unidades',
      //   class: 'view_list',
      //   route: 'sistema/listar-unidades'
      // },
      // {
      //   name: 'Cadastrar Diretor',
      //   class: 'how_to_reg',
      //   route: 'sistema/cadastrar-diretor'
      // },
      // {
      //   name: 'Listar Diretores',
      //   class: 'manage_accounts',
      //   route: 'sistema/listar-diretores'
      // },
      // {
      //   name: 'Lista de Consultas',
      //   class: 'description',
      //   route: 'medico/listar-consultas'
      // },
      // {
      //   name: 'Gerar Receita',
      //   class: 'medication',
      //   route: 'medico/gerar-receita'
      // },
      // {
      //   name: 'Estoque',
      //   class: 'inventory_2',
      //   route: 'farmacia/estoque'
      // },
      // {
      //   name: 'Abastecimento',
      //   class: 'file_download',
      //   route: 'farmacia/abastecimento'
      // },
      // {
      //   name: 'Historico',
      //   class: 'outbox',
      //   route: 'farmacia/historico'
      // },
      // {
      //   name: 'Registrar Vacina',
      //   class: 'vaccines',
      //   route: 'enfermagem/registrar-vacina'
      // }
      // ,
      // {
      //   name: 'Registrar Procedimento',
      //   class: 'local_hospital',
      //   route: 'enfermagem/registrar-procedimento'
      // },
      // {
      //   name: 'Lista de Consultas',
      //   class: 'description',
      //   route: 'medico/listar-consultas'
      // },
      // {
      //   name: 'Lista de Consultas',
      //   class: 'description',
      //   route: 'ortodontia/listar-consultas'
      // },
      // {
      //   name: 'Lista de Consultas',
      //   class: 'description',
      //   route: 'psicologia/listar-consultas'
      // },
      // {
      //   name: 'Gerar Receita',
      //   class: 'medication',
      //   route: 'medico/gerar-receita'
      // },
      // {
      //   name: 'Gerar Receita',
      //   class: 'medication',
      //   route: 'ortodontia/gerar-receita'
      // },
      // {
      //   name: 'Cadastrar Diretor',
      //   class: 'how_to_reg',
      //   route: 'sistema/cadastrar-diretor'
      // },
      // {
      //   name: 'Listar Diretores',
      //   class: 'manage_accounts',
      //   route: 'sistema/listar-diretores'
      // },
      // {
      //   name: 'Cadastro de Funcionário',
      //   class: 'person_add',
      //   route: 'administrativo/cadastro-funcionario'
      // },
      // {
      //   name: 'Estoque',
      //   class: 'inventory_2',
      //   route: 'farmacia/estoque'
      // },
      // {
      //   name: 'Abastecimento',
      //   class: 'file_download',
      //   route: 'farmacia/abastecimento'
      // },
      // {
      //   name: 'Historico',
      //   class: 'outbox',
      //   route: 'farmacia/historico'
      // },
      // {
      //   name: 'Registrar Vacina',
      //   class: 'vaccines',
      //   route: 'enfermagem/registrar-vacina'
      // }
      // ,
      // {
      //   name: 'Registrar Procedimento',
      //   class: 'local_hospital',
      //   route: 'enfermagem/registrar-procedimento'
      // }
    // ];
  }

  logout() {
    this.router.navigate(['']);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('menu');
  }
}

