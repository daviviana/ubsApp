import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';
import { ApiService } from '../shared/api.service';
import { Especialidade } from '../atendente/marca-consulta/marca-consulta';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private apiService: ApiService) { }

  criarFuncionario(funcionario: any) {
    console.log(funcionario);
    
    const body = {
      nome: funcionario.nome,
      dataNascimento: funcionario.dataNasc,
      cargo: funcionario.cargo.nome,
      cpf: funcionario.cpf,
      idEndereco: funcionario.idEndereco,
      permissao: funcionario.permissao,
      telefone: funcionario.telefone,
      email: funcionario.email,
      cadastroPref: funcionario.cadastroPref,
      idUnidade: funcionario.unidade
    }
    return this.apiService.post('/api/funcionario/', body);
  }

  buscarListaDiretores() {
    return this.apiService.getAll('/api/funcionario/diretor');
  }

  criarMedico(funcionario: any, especialidade: Especialidade | undefined, credencial: String) {
    console.log(funcionario);
    const body = {
      credencial: credencial,
      idFuncionario: funcionario.idFuncionario,
      idEspecialidade: especialidade!.idEspecialidade
    }

    return this.apiService.post('/api/medico/', body)
  }

  criarEnderecoFuncionario(funcionario: Funcionario) {
    const body = {
      endereco: funcionario.rua,
      numero: funcionario.numero,
      bairro: funcionario.bairro,
      cidade: funcionario.cidade,
      complemento: funcionario.complemento,
      cep: funcionario.cep
    }
    return this.apiService.post('/api/endereco/funcionario/', body);
  }

  buscaFuncionario(cpf: string, cadPref: string) {
    return this.apiService.getOne('/api/funcionario/0/' + cpf + '/' + cadPref + '/');
  }

  inativarFuncionario(funcionario: Funcionario) {
    funcionario.status = "Inativo"
    return this.apiService.put('/api/funcionario/' + funcionario.idFunc, funcionario);
  }

  atualizarFuncionario(funcionario: Funcionario) {
    console.log(funcionario);
    
    return this.apiService.put('/api/funcionario/' + funcionario.idFunc, funcionario);
  }

  atualizarEnderecoFuncionario(funcionario: Funcionario) {
    return this.apiService.put('/api/endereco/funcionario/' + funcionario.idEndereco, funcionario);
  }
}
