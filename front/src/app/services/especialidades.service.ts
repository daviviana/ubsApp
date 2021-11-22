import { Injectable } from '@angular/core';
import { Especialidade } from '../atendente/marca-consulta/marca-consulta';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private apiService: ApiService) { }

  buscarEspecialidades() {
    return this.apiService.getAll('/api/especialidade/');
  }

  buscarMedicoEspecialidade(idEspecialidade: any | undefined) {
    return this.apiService.getAll('/api/medico/especialidade/' + idEspecialidade)
  }
}
