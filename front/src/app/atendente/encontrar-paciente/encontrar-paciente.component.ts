import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente';
import { ConsultaService } from '../../services/consulta.service';
import { ModalConfig } from 'src/app/components/modal/modal.config';
import { ModalComponent } from 'src/app/components/modal/modal.component';
@Component({
  selector: 'app-encontrar-paciente',
  templateUrl: './encontrar-paciente.component.html',
  styleUrls: ['./encontrar-paciente.component.scss']
})
export class EncontrarPacienteComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent | undefined;
  modalConfig: ModalConfig = new ModalConfig();
  mensagemModal: String = '';


  formPaciente: FormGroup = new FormGroup({});
  pesquisadoCPF: boolean = false;
  pesquisadoSUS: boolean = false;
  paciente: Paciente | undefined;
  pacienteSelecionado: Paciente | undefined;
  listaConsultas: Array<any> | undefined;
  hoje: any | undefined;
  data: String | undefined;
  horario: String | undefined;

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private pacienteService: PacienteService, private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.hoje = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    this.criarFormPaciente();

  }

  criarFormPaciente() {
    this.formPaciente = this.formBuilder.group({
      cpf: [this.formPaciente.value.cpf, Validators.minLength(11)],
      sus: [this.formPaciente.value.sus, Validators.minLength(15)]
    });
  }

  pesquisarCPF() {
    this.pacienteService.buscarPaciente(this.formPaciente.value.cpf, '0').subscribe((res) => {
      if (res.length !== 0) {
        this.paciente = res;
      }
    })
    this.pesquisadoCPF = true;
    this.pesquisadoSUS = false;
    this.pacienteSelecionado = undefined;
    this.listaConsultas = undefined;
  }

  pesquisarSUS() {
    this.pacienteService.buscarPaciente('0', this.formPaciente.value.sus).subscribe((res) => {
      if (res.length !== 0) {
        this.paciente = res;
      }
    })
    this.pacienteSelecionado = undefined;
    this.pesquisadoSUS = true;
    this.pesquisadoCPF = false;
    this.listaConsultas = undefined;
  }

  selecionarPaciente() {
    this.pacienteSelecionado = this.paciente;
    this.consultaService.buscarListaConsultasPaciente(this.pacienteSelecionado!).subscribe((res) => {
      this.listaConsultas = res;
      console.log(this.listaConsultas);

      this.listaConsultas = this.listaConsultas!.sort(function (a, b) {
        return a.data! > b.data! ? -1 : a.data! < b.data! ? 1 : 0;
      });

      this.listaConsultas.forEach((consulta) => {
        consulta.horario = consulta.data?.slice(11, 16);
        consulta.data = consulta.data?.slice(0, 10);
      })
    })
  }

  consultaAusente(consulta: any) {
    this.consultaService.cancelarConsulta(consulta).subscribe((res: any) => {
      this.modalConfig.modalTitle = 'Operação bem sucedida!';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;
      this.openModal();

      this.selecionarPaciente();
    },() => {
      this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente.';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;
      this.openModal();
    })
  }
  
  finalizarConsulta(consulta: any) {
    this.consultaService.finalizarConsulta(consulta).subscribe((res: any) => {
      this.modalConfig.modalTitle = 'Operação bem sucedida!';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;
      this.openModal();
      this.selecionarPaciente();
    },() => {
      this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente.';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;
      this.openModal();
    })
  }

  atualizarPaciente(paciente: Paciente) {
    this.pacienteService.atualizarPaciente(paciente).subscribe((res) => {
      // modal sucesso
    })

    this.pacienteService.atualizarEnderecoPaciente(paciente).subscribe((res) => {
      // modal sucesso
    })
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

  getControl(control: string): FormControl {
    return this.formPaciente.controls[control] as FormControl;
  }

  temConsulta() {
    let temConsulta = false;
    if (this.listaConsultas) {
      this.listaConsultas!.forEach(consulta => {
        if (consulta) temConsulta = true;
      });
    }
    return temConsulta;
  }

  async openModal() {
    return await this.modalComponent!.open()
  }
}
