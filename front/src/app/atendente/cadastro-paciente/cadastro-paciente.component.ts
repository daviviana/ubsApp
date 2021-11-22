import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalConfig } from 'src/app/components/modal/modal.config';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { FormHelper } from './../../helpers/form.helper';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent implements OnInit, OnDestroy {
  @ViewChild('modal') private modalComponent: ModalComponent | undefined;
  modalConfig: ModalConfig = new ModalConfig();
  mensagemModal: String = '';
  
  formPaciente: FormGroup = new FormGroup({});
  cep = new Subject<string>();
  generoOptions = [
    {
      label: 'Masculino',
      value: 'M',
    },
    {
      label: 'Feminino',
      value: 'F',
    },
    {
      label: 'Não informar',
      value: 'X',
    },
  ];

  constructor(private formBuilder: FormBuilder, private formHelper: FormHelper, private pacienteService: PacienteService) {
    this.cep.pipe(debounceTime(500)).subscribe((cep) => this.getEndereco(cep));
  }

  ngOnInit(): void {
    this.createForm(new Paciente());
  }

  ngOnDestroy(): void {
    this.cep.unsubscribe();
  }

  createForm(paciente: Paciente) {
    this.formPaciente = this.formBuilder.group({
      nome: [paciente.nome, [Validators.required, Validators.minLength(3)]],
      nomeMae: [paciente.nomeMae, [Validators.required, Validators.minLength(3)]],
      genero: [paciente.genero, Validators.required],
      dataNasc: [paciente.dataNasc, Validators.required],
      sus: [paciente.sus, [Validators.required, Validators.minLength(15)]],
      cpf: [paciente.cpf, [Validators.required, Validators.minLength(11)]],
      rua: [paciente.rua, Validators.required],
      numero: [paciente.numero, Validators.required],
      bairro: [paciente.bairro, [Validators.required, Validators.minLength(3)]],
      cidade: [paciente.cidade, [Validators.required, Validators.minLength(3)]],
      cep: [paciente.cep, [Validators.required, Validators.minLength(8)]],
      complemento: [paciente.complemento],
      email: [paciente.email, [Validators.required, Validators.email]],
      telefone: [paciente.telefone, [Validators.required, Validators.minLength(10)]],
      numeroEmergencia: [paciente.numeroEmergencia],
      idEndereco: [paciente.idEndereco]
    })
  }

  getControl(control: string): FormControl {
    return this.formPaciente.controls[control] as FormControl;
  }

  getEndereco(cep: string): void {
    this.formHelper.setEndereco(this.formPaciente, cep);
  }

  buscarCep(cep: string): void {
    if (cep.length === 8) {
      this.cep.next(cep);
    }
  }

  enviar() {
    this.pacienteService.criarEnderecoPaciente(this.formPaciente.getRawValue()).subscribe((res) => {
      this.formPaciente.controls.idEndereco.setValue(res.idPacienteEndereco);
      this.pacienteService.criarPaciente(this.formPaciente.getRawValue()).subscribe(() => {
        this.modalConfig.modalTitle = 'Paciente cadastrado com sucesso';
        this.modalConfig.closeButtonLabel = 'Ok'
        this.modalConfig.hideDismissButton = true;
        this.modalConfig.mustRefresh = true;
        this.openModal();
      }, (err) => {
        this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente';
        this.modalConfig.closeButtonLabel = 'Ok'
        this.modalConfig.hideDismissButton = true;
        this.modalConfig.mustRefresh = false;
        this.openModal();
      });
    }, (err) => {
      this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;
      this.openModal();
    });
  }

  async openModal() {
    console.log(this.modalComponent);
    
    return await this.modalComponent!.open()
  }
}
