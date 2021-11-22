import { Injectable } from '@angular/core';;
import { Paciente } from '../atendente/paciente';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private apiService: ApiService) { }

  buscarHorariosDisponiveis(data: String, funcionario: any) {
    return this.apiService.getAll('/api/atendimento/medico/' + funcionario.idFuncionario + '/' + data);
  }

  criarConsulta(request: any) {
    console.log(request);
    
    let body = {
      idPaciente: request.paciente.idPaciente,
      idFuncionario: request.medico.idFuncionario,
      observacao: request.comentario,
      data: request.dataHora,
      statusAtendimento: '1',
    }
    console.log(request);
    
    return this.apiService.post('/api/atendimento/', body);
  }

  buscarListaConsultas(data: String) {
    return this.apiService.getAll('/api/atendimento/medico/' + sessionStorage.getItem('id') + '/' + data);
  }

  buscarListaConsultasPaciente(paciente: Paciente) {
    return this.apiService.getAll('/api/atendimento/paciente/' + paciente.idPaciente);
  }
  
  cancelarConsulta(consulta: any) {
    consulta.statusAtendimento = '3';
    return this.apiService.put('/api/atendimento/' + consulta.idAtendimento, consulta);
  }


  finalizarConsulta(consulta: any) {
    consulta.statusAtendimento = '2'
    return this.apiService.put('/api/atendimento/' + consulta.idAtendimento, consulta);
  }
}
