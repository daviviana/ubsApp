import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private apiService: ApiService) { }

  criarPaciente(paciente: Paciente) {
    const body = {
      nome: paciente.nome,
      sus: paciente.sus,
      cpf: paciente.cpf,
      dataNascimento: paciente.dataNasc,
      telefone: paciente.telefone,
      email: paciente.email,
      idEndereco: paciente.idEndereco
    }
    console.log(body);
    
    return this.apiService.post('/api/paciente/', body);
  }

  criarEnderecoPaciente(paciente: Paciente) {
    const body = {
      endereco: paciente.rua,
      numero: paciente.numero,
      bairro: paciente.bairro,
      cidade: paciente.cidade,
      complemento: paciente.complemento,
      cep: paciente.cep
    }
    return this.apiService.post('/api/endereco/paciente/', body);
  }


  buscarPaciente(cpf: String, sus: String) {
    return this.apiService.getOne('/api/paciente/0/' + cpf + '/' + sus);
  }

  atualizarPaciente(paciente: Paciente) {
    return this.apiService.put('/api/paciente/' + paciente.idPaciente, paciente);
  }

  atualizarEnderecoPaciente(paciente: Paciente) {
    return this.apiService.put('/api/paciente/' + paciente.idPaciente, paciente);
  }

  inativarPaciente(paciente: Paciente) {
    paciente.status = 'Inativo';
    return this.apiService.put('/api/endereco/paciente/' + paciente.idEndereco, paciente);
  }
}
