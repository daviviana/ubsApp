import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  identify(loginData: any) {
    const body = {
      email: loginData.codFunc,
      password: loginData.senha
    }
    return this.apiService.post('/api/auth/login', body);

    
  }
}
