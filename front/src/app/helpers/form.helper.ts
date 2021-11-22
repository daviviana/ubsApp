import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors } from "@angular/forms";
import { CepService } from "../services/cep.service";

interface IObjectKeys {
  [key: string]: string;
};

interface ErrorMap extends IObjectKeys {};

@Injectable()
export class FormHelper {
  errorText: ErrorMap = {
    required: 'Este campo é obrigatório',
    minlength: 'Campo inválido',
    email: 'Email inválido'
  };

  constructor(private cepService: CepService) { }

  errorMap(errors: ValidationErrors): Array<string> {
    return Object.keys(errors).map((key) => this.errorText[key])
  }

  setEndereco(form: FormGroup, cep: string): void {
    this.cepService.getEndereco(cep).subscribe((res) => {
      form.controls['cidade'].setValue(res.localidade || '');
      form.controls['bairro'].setValue(res.bairro || '');
      form.controls['rua'].setValue(res.logradouro || '');
      form.controls['complemento'].setValue(res.complemento || '');
    }, () => {
      form.controls['cep'].setValue('');
    });
  }
}