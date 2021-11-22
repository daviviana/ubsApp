import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api.service';
import { Unidade } from './unidade';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService {
  http: any;

  constructor(private apiService: ApiService) { }

  criarUnidade(unidade: Unidade) {
    const body = {
      nome: unidade.nome,
      idEndereco: unidade.idEndereco,
      telefone: unidade.telefone,
      email: unidade.email
    }
    return this.apiService.post('/api/unidade', body);
  }

  criarEnderecoUnidade(unidade: Unidade) {
    const body = {
      endereco: unidade.rua,
      numero: unidade.numero,
      bairro: unidade.bairro,
      cidade: unidade.cidade,
      complemento: unidade.complemento,
      cep: unidade.cep
    }
    return this.apiService.post('/api/endereco/unidade', body);
  }

  listarUnidades() {
    return this.apiService.getAll('/api/unidade');
  }

  deletarUnidade(unidade: Unidade) {
    return this.apiService.delete('/api/unidade/' + unidade.idUnidade);
  }

  atualizarUnidade(unidade: Unidade) {
    const body = {
      nome: unidade.nome,
      endereco: unidade.rua,
      numero: unidade.numero,
      bairro: unidade.bairro,
      cidade: unidade.cidade,
      complemento: unidade.complemento,
      cep: unidade.cep,
      email: unidade.email,
      telefone: unidade.telefone
    }
    return this.apiService.put('/api/unidade/' + unidade.idUnidade, body);
  }


}
