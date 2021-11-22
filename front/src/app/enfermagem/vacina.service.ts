import { Injectable } from '@angular/core';
import { Paciente } from '../atendente/paciente';
import { ApiService } from '../shared/api.service';
import { Vacina } from './registrar-vacina/registrar-vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  constructor(private apiService: ApiService) { }
  
  buscarListaVacina() {
    return this.apiService.getAll('/api/vacina');
  }

  adicionarVacina(paciente: Paciente, vacina: any) {
    const body = {
      idPaciente: paciente.idPaciente,
      data: vacina.data,
      vacina: vacina.nomeVacina,
      dose: vacina.dose,
      idFuncionario: sessionStorage.getItem('id'),
    }
    return this.apiService.post('/api/vacina', body);
  }
  
  buscarVacinasPaciente(paciente: Paciente) {
    return this.apiService.getAll('/api/vacinacao/paciente/' + paciente.idPaciente);
  }

  deletarVacina(vacina: Vacina) {
    return this.apiService.delete('/api/vacinacao/paciente/' + vacina.idVacina)
  }
}
