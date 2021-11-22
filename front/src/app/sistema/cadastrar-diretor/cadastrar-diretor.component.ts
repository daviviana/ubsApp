import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/administrativo/funcionario';
import { FuncionarioService } from 'src/app/administrativo/funcionario.service';
import { Unidade } from '../unidade';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'app-cadastrar-diretor',
  templateUrl: './cadastrar-diretor.component.html',
  styleUrls: ['./cadastrar-diretor.component.scss']
})
export class CadastrarDiretorComponent implements OnInit {

  formFuncionario: FormGroup = new FormGroup({});
  listaUnidades: Array<Unidade> | undefined;
  constructor(private formBuilder: FormBuilder, private unidadeService: UnidadeService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.createForm(new Funcionario());
    this.buscarUnidades();
  }

  createForm(funcionario: Funcionario) {
    this.formFuncionario = this.formBuilder.group({
      nome: [funcionario.nome, [Validators.required, Validators.minLength(10)]],
      genero: [funcionario.genero, Validators.required],
      dataNasc: [funcionario.dataNasc, Validators.required],
      cpf: [funcionario.cpf, [Validators.required, Validators.minLength(11)]],
      rua: [funcionario.rua, Validators.required],
      numero: [funcionario.numero, Validators.required],
      bairro: [funcionario.bairro, [Validators.required, Validators.minLength(3)]],
      cidade: [funcionario.cidade, [Validators.required, Validators.minLength(3)]],
      cep: [funcionario.cep, [Validators.required, Validators.minLength(8)]],
      complemento: [funcionario.complemento],
      email: [funcionario.email, [Validators.required, Validators.email]],
      telefone: [funcionario.telefone, [Validators.required, Validators.minLength(10)]],
      cadastroPref: [funcionario.cadastroPref, Validators.required],
      unidade: [funcionario.unidade, Validators.required],
      permissao: [funcionario.permissao],
      idEndereco: [funcionario.idEndereco],
      cargo: [funcionario.cargo]
    })
  }

  buscarUnidades() {
    this.unidadeService.listarUnidades().subscribe((res) => {
      this.listaUnidades = res;
    })
  }

  enviar() {
    this.formFuncionario.controls.permissao.setValue('D');
    this.formFuncionario.controls.cargo.setValue({nome: 'Diretor'})
    this.funcionarioService.criarEnderecoFuncionario(this.formFuncionario.getRawValue()).subscribe((res: any) => {
      this.formFuncionario.controls.idEndereco.setValue(res.idFuncionarioEndereco);
      this.funcionarioService.criarFuncionario(this.formFuncionario.getRawValue()).subscribe((res) => {
        // modal sucesso
      })
    })
  }
}