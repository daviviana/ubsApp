import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  constructor(private apiService: ApiService) { }

  buscarHistoricoRetirada(data: String, idUnidade: string | null) {
    return this.apiService.getAll('/api/retirada/data/' + data + '/' + idUnidade);
  }

  buscarMedicamentos() {
    return this.apiService.getAll('/api/medicamento/unidade/' + sessionStorage.getItem('idUnidade'));
  }

  abastecer(medicamento: any) {
    console.log(medicamento);
    return this.apiService.post('/api/medicamento/', medicamento);
  }
}
