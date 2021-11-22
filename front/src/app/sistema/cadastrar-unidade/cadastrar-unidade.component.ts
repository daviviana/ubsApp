import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Unidade } from '../unidade';
import { UnidadeService } from '../unidade.service';
import { FormHelper } from './../../helpers/form.helper';

@Component({
  selector: 'app-cadastrar-unidade',
  templateUrl: './cadastrar-unidade.component.html',
  styleUrls: ['./cadastrar-unidade.component.scss']
})
export class CadastrarUnidadeComponent implements OnInit {

  formUnidade: FormGroup = new FormGroup({});
  errorText = {
    required: 'Este campo é obrigatório',
    minLength: 'Campo inválido',
  };
  cep = new Subject<string>();

  constructor(private formBuilder: FormBuilder, private formHelper: FormHelper, private unidadeService: UnidadeService) {
    this.cep.pipe(debounceTime(500)).subscribe((cep) => this.getEndereco(cep));
  }

  ngOnInit(): void {
    this.createForm(new Unidade());
  }

  ngOnDestroy(): void {
    this.cep.unsubscribe();
  }

  createForm(unidade: Unidade) {
    this.formUnidade = this.formBuilder.group({
      nome: [unidade.nome, [Validators.required, Validators.minLength(3)]],
      rua: [unidade.rua, Validators.required],
      numero: [unidade.numero, Validators.required],
      bairro: [unidade.bairro, [Validators.required, Validators.minLength(3)]],
      cidade: [unidade.cidade, [Validators.required, Validators.minLength(3)]],
      cep: [unidade.cep, [Validators.required, Validators.minLength(8)]],
      complemento: [unidade.complemento],
      email: [unidade.email],
      telefone: [unidade.telefone, [Validators.required, Validators.minLength(10)]],
      idUnidade: [unidade.idUnidade],
      idEndereco: [unidade.idEndereco]
    })
  }

  getEndereco(cep: string): void {
    this.formHelper.setEndereco(this.formUnidade, cep);
  }

  enviar() {
    this.formUnidade.value.nome = 'UBS ' + this.formUnidade.value.nome;
    this.formUnidade.controls.email.setValue(this.formUnidade.value.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '') + '@ubsgru.com.br');

    this.unidadeService.criarEnderecoUnidade(this.formUnidade.getRawValue()).subscribe((res)=> {
      console.log(this.formUnidade);
      
      this.formUnidade.controls.idEndereco.setValue(res.idUnidadeEndereco);
      this.unidadeService.criarUnidade(this.formUnidade.getRawValue()).subscribe(() => {
        // modal de sucesso
      })
    })
   
    
  }

  required(field: string): boolean {
    const formField = this.formUnidade.get(field);
    return !!formField && !!formField.errors && formField.hasError('required');
  }

  error(field: string): boolean {
    const formField = this.formUnidade.get(field);
    return !!formField && !!formField.errors && formField.touched;
  }

  errors(field: string): Array<string> {
    const formField = this.formUnidade.get(field);
    if (formField?.errors) {
      return this.formHelper.errorMap(formField.errors);
    }
    return [];
  }

  buscarCep(cep: string): void {
    if (cep.length === 8) {
      this.cep.next(cep);
    }
  }
}