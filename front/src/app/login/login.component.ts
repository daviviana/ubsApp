import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any;
  formError: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.createForm();
    this.formError = false;
  }

  createForm() {
    this.loginForm = this.fb.group({
      codFunc: '',
      senha: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.value.codFunc.length < 6 || this.loginForm.value.senha.length < 6) {
      this.formError = true;
      return;
    }

    this.formError = false;
    this.loginService.identify(this.loginForm.value).subscribe(
      (response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('menu', JSON.stringify(response.menu));
        sessionStorage.setItem('id', response.funcionario.idFuncionario);
        sessionStorage.setItem('idUnidade', response.funcionario.idUnidade);
        this.router.navigate(['sgi/initial']);
      },
      () => {
        this.formError = true;
      });
  }
}
