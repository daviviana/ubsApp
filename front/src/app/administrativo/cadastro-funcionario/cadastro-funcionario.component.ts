import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Especialidade } from 'src/app/atendente/marca-consulta/marca-consulta';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalConfig } from 'src/app/components/modal/modal.config';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { Unidade } from 'src/app/sistema/unidade';
import { UnidadeService } from 'src/app/sistema/unidade.service';
import { Funcionario } from '../funcionario';
import { FuncionarioService } from '../funcionario.service';


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent | undefined;
  modalConfig: ModalConfig = new ModalConfig();
  mensagemModal: String = '';

  formFuncionario: FormGroup = new FormGroup({});
  listaUnidades: Array<Unidade> | undefined;
  listaEspecialidades: Array<Especialidade> | undefined;
  cargoMedico: boolean = false;
  especialidadeEscolhida: Especialidade | undefined;
  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService, private especialidadeService: EspecialidadesService, private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.createForm(new Funcionario());
    this.buscarEspecialidades();
    this.buscarUnidades();
  }

  createForm(funcionario: Funcionario) {
    this.formFuncionario = this.formBuilder.group({
      nome: [funcionario.nome, [Validators.required, Validators.minLength(10)]],
      genero: [funcionario.genero, Validators.required],
      dataNasc: [funcionario.dataNasc, Validators.required],
      cpf: [funcionario.cpf, [Validators.required, Validators.minLength(11)]],
      rua: [funcionario.rua, Validators.required],
      idEndereco: [funcionario.idEndereco],
      numero: [funcionario.numero, Validators.required],
      bairro: [funcionario.bairro, [Validators.required, Validators.minLength(3)]],
      cidade: [funcionario.cidade, [Validators.required, Validators.minLength(3)]],
      cep: [funcionario.cep, [Validators.required, Validators.minLength(8)]],
      complemento: [funcionario.complemento],
      email: [funcionario.email, [Validators.required, Validators.email]],
      telefone: [funcionario.telefone, [Validators.required, Validators.minLength(10)]],
      cargo: [funcionario.cargo, Validators.required],
      cadastroPref: [funcionario.cadastroPref, Validators.required],
      credencial: [funcionario.credencial],
      unidade: [funcionario.unidade, Validators.required],
      permissao: [funcionario.permissao]
    })
  }

  buscarEspecialidades() {
    this.especialidadeService.buscarEspecialidades().subscribe((res) => {
      this.listaEspecialidades = [{ idEspecialidade: '', nome: 'Diretoria' }, { idEspecialidade: '', nome: 'Atendente SUS' }, { idEspecialidade: '', nome: 'Administrativa' }];
      this.listaEspecialidades = this.listaEspecialidades.concat(res);
    })
  }

  buscarUnidades() {
    this.unidadeService.listarUnidades().subscribe((res) => {
      console.log(res);
      this.listaUnidades = res;
    })
  }

  enviar() {
    this.especialidadeEscolhida = this.formFuncionario.value.cargo;
    switch (this.formFuncionario.value.cargo.nome) {
      case 'Administrativa':
        this.formFuncionario.controls.permissao.setValue('D');
        this.cargoMedico = false;
        break;
      case 'Atendente SUS':
        this.formFuncionario.controls.permissao.setValue('A');
        this.cargoMedico = false;
        break;
      case 'Diretoria':
        this.formFuncionario.controls.permissao.setValue('D');
        this.cargoMedico = false;
        break;
      case 'Enfermagem':
        this.formFuncionario.controls.permissao.setValue('E');
        this.cargoMedico = true;
        this.formFuncionario.value.cargo.nome = 'Médico';
        break;
      case 'Farmacêutica':
        this.formFuncionario.controls.permissao.setValue('F');
        this.cargoMedico = true;
        this.formFuncionario.value.cargo.nome = 'Médico';
        break;
      case 'Psicologia':
        this.formFuncionario.controls.permissao.setValue('P');
        this.cargoMedico = true;
        this.formFuncionario.value.cargo.nome = 'Médico';
        break;
      case 'Odontologia':
        this.formFuncionario.controls.permissao.setValue('O');
        this.cargoMedico = true;
        this.formFuncionario.value.cargo.nome = 'Médico';
        break;
      case 'Clínica':
        this.formFuncionario.controls.permissao.setValue('M');
        this.cargoMedico = true;
        this.formFuncionario.value.cargo.nome = 'Médico';
        break;
    }

    this.funcionarioService.criarEnderecoFuncionario(this.formFuncionario.getRawValue()).subscribe((res: any) => {
      this.formFuncionario.controls.idEndereco.setValue(res.idFuncionarioEndereco);
      this.funcionarioService.criarFuncionario(this.formFuncionario.getRawValue()).subscribe((res) => {
        let funcionario = res
        if (this.cargoMedico === true) {
          this.funcionarioService.criarMedico(funcionario, this.especialidadeEscolhida, this.formFuncionario.value.credencial).subscribe((res) => {
            this.modalConfig.modalTitle = 'Funcionário cadastrado com sucesso';
            this.modalConfig.closeButtonLabel = 'Ok'
            this.modalConfig.hideDismissButton = true;
            this.modalConfig.mustRefresh = true;
            this.openModal();
          }, () => {
            this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente';
            this.modalConfig.closeButtonLabel = 'Ok'
            this.modalConfig.hideDismissButton = true;
            this.modalConfig.mustRefresh = false;
            this.openModal();
          })
        }
      })
    })
  }

  limpaCargo() {
    this.formFuncionario.controls.credencial.reset();
  }

  async openModal() {
    return await this.modalComponent!.open()
  }
}
