import { Injectable } from '@angular/core';
import { Paciente } from '../atendente/paciente';
import { ApiService } from '../shared/api.service';
import { Procedimento } from './registrar-procedimento/registrar-procedimento';

@Injectable({
  providedIn: 'root'
})
export class ProcedimentoService {

  constructor(private apiService: ApiService) { }
  
  buscarListaProcedimento() {
    return this.apiService.getAll('/api/procedimento');
  }

  adicionarProcedimento(paciente: Paciente, procedimento: Procedimento) {
    const body = {
      idPaciente: paciente.idPaciente,
      data: procedimento.data,
      procedimento: procedimento.nome,
      idFuncionario: sessionStorage.getItem('id'),
    }
    return this.apiService.post('/api/procedimentofeito', body);
  }

  buscarProcedimentosPaciente(paciente: Paciente) {
    return this.apiService.getAll('/api/procedimentofeito/paciente/' + paciente.idPaciente);
  }

  deletarVacina(procedimento: Procedimento) {
    return this.apiService.delete('/api/procedimentofeito/paciente/' + procedimento.idProcedimento);
  }
}
