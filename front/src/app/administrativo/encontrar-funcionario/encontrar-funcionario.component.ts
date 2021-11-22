import { DatePipe } from '@angular/common';
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
  selector: 'app-encontrar-funcionario',
  templateUrl: './encontrar-funcionario.component.html',
  styleUrls: ['./encontrar-funcionario.component.scss']
})
export class EncontrarFuncionarioComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent | undefined;
  modalConfig: ModalConfig = new ModalConfig();
  mensagemModal: String = '';

  formFuncionario: FormGroup = new FormGroup({});
  formFuncionarioEditar: FormGroup = new FormGroup({});
  pesquisadoCPF: boolean = false;
  pesquisadoPref: boolean = false;
  funcionario: Funcionario | undefined;
  funcionarioSelecionado: any | undefined;
  hoje: any | undefined;
  cargoMedico: boolean = false;
  mensagem: boolean | undefined;
  especialidadeEscolhida: Especialidade | undefined;
  listaUnidades: Array<Unidade> | undefined;
  listaEspecialidades: Array<Especialidade> | undefined;

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private funcionarioService: FuncionarioService, private especialidadeService: EspecialidadesService, private unidadeService: UnidadeService) { }



  ngOnInit(): void {
    this.createForm(new Funcionario());
    this.createFormFuncionario();

    this.hoje = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    this.buscarEspecialidades();
    this.buscarUnidades();
  }

  createFormFuncionario() {
    this.formFuncionario = this.formBuilder.group({
      cpf: [this.formFuncionario.value.cpf, Validators.minLength(11)],
      cadastroPref: [this.formFuncionario.value.cadastroPref, Validators.minLength(15)]
    });
  }

  createForm(funcionario: any) {
    this.formFuncionarioEditar = this.formBuilder.group({
      idFunc: [funcionario.idFunc],
      nome: [funcionario.nome, [Validators.required, Validators.minLength(10)]],
      genero: [funcionario.genero, Validators.required],
      dataNasc: [funcionario.dataNasc, Validators.required],
      cpf: [funcionario.cpf, [Validators.required, Validators.minLength(11)]],
      rua: [funcionario.rua, Validators.required],
      idEndereco: [funcionario.idFuncionarioEndereco],
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
    });
  }

  buscarEspecialidades() {
    this.especialidadeService.buscarEspecialidades().subscribe((res) => {
      this.listaEspecialidades = [{ idEspecialidade: '', nome: 'Diretoria' }, { idEspecialidade: '', nome: 'Atendente SUS' }, { idEspecialidade: '', nome: 'Administrativa' }];
      this.listaEspecialidades = this.listaEspecialidades.concat(res);
    })
  }

  buscarUnidades() {
    this.unidadeService.listarUnidades().subscribe((res) => {
      this.listaUnidades = res;
    })
  }

  pesquisaCPF() {
    this.funcionarioService.buscaFuncionario(this.formFuncionario.value.cpf, '0').subscribe((res) => {
      if (res.length !== 0) {
        this.funcionario = res;
        this.funcionarioSelecionado = undefined;
      }
    })
    this.pesquisadoCPF = true;
    this.pesquisadoPref = false;
  }

  pesquisaPref() {
    this.funcionarioService.buscaFuncionario('0', this.formFuncionario.value.cadastroPref).subscribe((res) => {
      if (res.length !== 0) {
        this.funcionario = res;
        this.funcionarioSelecionado = undefined;
      }
    })
    this.pesquisadoCPF = true;
    this.pesquisadoPref = false;
  }

  selecionarFuncionario() {
    this.funcionarioSelecionado = this.funcionario;
    this.formFuncionarioEditar.controls.idFunc.setValue(this.funcionarioSelecionado!.idFuncionario)
    this.formFuncionarioEditar.controls.nome.setValue(this.funcionarioSelecionado!.nome);
    this.formFuncionarioEditar.controls.genero.setValue(this.funcionarioSelecionado!.genero);
    this.formFuncionarioEditar.controls.dataNasc.setValue(this.funcionarioSelecionado!.dataNasc);
    this.formFuncionarioEditar.controls.cpf.setValue(this.funcionarioSelecionado!.cpf);
    this.formFuncionarioEditar.controls.rua.setValue(this.funcionarioSelecionado!.endereco);
    this.formFuncionarioEditar.controls.idEndereco.setValue(this.funcionarioSelecionado!.idFuncionarioEndereco);
    this.formFuncionarioEditar.controls.numero.setValue(this.funcionarioSelecionado!.numero);
    this.formFuncionarioEditar.controls.bairro.setValue(this.funcionarioSelecionado!.bairro);
    this.formFuncionarioEditar.controls.cidade.setValue(this.funcionarioSelecionado!.cidade);
    let cep = "0" + this.funcionarioSelecionado!.cep;
    this.formFuncionarioEditar.controls.cep.setValue(cep);
    this.formFuncionarioEditar.controls.complemento.setValue(this.funcionarioSelecionado!.complemento);
    this.formFuncionarioEditar.controls.email.setValue(this.funcionarioSelecionado!.email);
    this.formFuncionarioEditar.controls.telefone.setValue(this.funcionarioSelecionado!.telefone);
    this.formFuncionarioEditar.controls.cadastroPref.setValue(this.funcionarioSelecionado!.cadastroPref);
    this.formFuncionarioEditar.controls.credencial.setValue(this.funcionarioSelecionado!.credencial);
    this.formFuncionarioEditar.controls.unidade.setValue(this.funcionarioSelecionado!.unidade);
    this.formFuncionarioEditar.controls.permissao.setValue(this.funcionarioSelecionado!.permissao);
  }

  atualizarFuncionario(funcionario: Funcionario) {
    this.funcionarioService.atualizarFuncionario(funcionario).subscribe((res) => {
      // modal sucesso
    })
  }

  inativarFuncionario() {
    this.funcionarioService.inativarFuncionario(this.funcionarioSelecionado!).subscribe((res) => {
      // modal sucesso
    })
  }

  enviar() {
    this.especialidadeEscolhida = this.formFuncionarioEditar.value.cargo;
    switch (this.formFuncionarioEditar.value.cargo.nome) {
      case 'Administrativa':
        this.formFuncionarioEditar.controls.permissao.setValue('D');
        this.cargoMedico = false;
        break;
      case 'Atendente SUS':
        this.formFuncionarioEditar.controls.permissao.setValue('A');
        this.cargoMedico = false;
        break;
      case 'Diretoria':
        this.formFuncionarioEditar.controls.permissao.setValue('D');
        this.cargoMedico = false;
        break;
      case 'Enfermagem':
        this.formFuncionarioEditar.controls.permissao.setValue('E');
        this.cargoMedico = true;
        this.formFuncionarioEditar.value.cargo.nome = 'Médico';
        break;
      case 'Farmacêutica':
        this.formFuncionarioEditar.controls.permissao.setValue('F');
        this.cargoMedico = true;
        this.formFuncionarioEditar.value.cargo.nome = 'Médico';
        break;
      case 'Psicologia':
        this.formFuncionarioEditar.controls.permissao.setValue('P');
        this.cargoMedico = true;
        this.formFuncionarioEditar.value.cargo.nome = 'Médico';
        break;
      case 'Odontologia':
        this.formFuncionarioEditar.controls.permissao.setValue('O');
        this.cargoMedico = true;
        this.formFuncionarioEditar.value.cargo.nome = 'Médico';
        break;
      case 'Clínica':
        this.formFuncionarioEditar.controls.permissao.setValue('M');
        this.cargoMedico = true;
        this.formFuncionarioEditar.value.cargo.nome = 'Médico';
        break;
    }

    this.funcionarioService.atualizarFuncionario(this.formFuncionarioEditar.getRawValue()).subscribe(() => {
      this.funcionarioService.atualizarEnderecoFuncionario(this.formFuncionarioEditar.getRawValue()).subscribe((res) => {
        this.modalConfig.modalTitle = 'Operação bem sucedida!';
        this.modalConfig.closeButtonLabel = 'Ok'
        this.modalConfig.hideDismissButton = true;
        this.modalConfig.mustRefresh = true;
        this.openModal();
      }, () => {
        this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente.';
        this.modalConfig.closeButtonLabel = 'Ok'
        this.modalConfig.hideDismissButton = true;
        this.modalConfig.mustRefresh = false;
        this.openModal();
      })
    }, () => {
      this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente.';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;
      this.openModal();
  });
}

limpaCargo() {
  console.log(this.formFuncionarioEditar);

  this.formFuncionarioEditar.controls.credencial.reset();
}

testaData(data: String | undefined) {
  let dataConsulta = data!.split("/");
  let dataFormatada = new Date((parseInt(dataConsulta[2])), (parseInt(dataConsulta[1])) - 1, (parseInt(dataConsulta[0])));
  if (dataFormatada > new Date()) {
    return false;
  } else {
    return true;
  }
}

  async openModal() {
  return await this.modalComponent!.open()
}
}
