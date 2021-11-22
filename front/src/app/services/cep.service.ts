import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const viacepUrl = 'https://viacep.com.br/ws/';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  constructor(private http: HttpClient) { }

  getEndereco(cep: string): Observable<any> {
    return this.http.get(`${viacepUrl}${cep}/json`);
  }
}
