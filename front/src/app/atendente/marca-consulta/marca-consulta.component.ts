import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/administrativo/funcionario';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalConfig } from 'src/app/components/modal/modal.config';
import { ConsultaService } from 'src/app/services/consulta.service';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { Especialidade } from './marca-consulta';

@Component({
  selector: 'app-marca-consulta',
  templateUrl: './marca-consulta.component.html',
  styleUrls: ['./marca-consulta.component.scss']
})
export class MarcaConsultaComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent | undefined;
  modalConfig: ModalConfig = new ModalConfig();
  mensagemModal: String = '';

  formPaciente: FormGroup = new FormGroup({});
  formConsulta: FormGroup = new FormGroup({});

  pesquisadoCPF: boolean = false;
  pesquisadoSUS: boolean = false;
  paciente: Paciente | undefined;

  especialidades: Array<Especialidade> | undefined;
  horariosDisponiveis: Array<String> | undefined;
  listaMedicos: Array<Funcionario> | undefined;

  pacienteSelecionado: Paciente | undefined;
  especialidadeSelecionada: Especialidade | undefined;
  medicoSelecionado: Funcionario | undefined;
  dataSelecionada: String | undefined;
  horarioSelecionado: String | undefined;

  constructor(private formBuilder: FormBuilder, private pacienteService: PacienteService, private especialidadeService: EspecialidadesService, private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.horariosDisponiveis = ['09:05', '09:10', '09:15', '09:20', '09:25', '09:30'];
    this.createFormPaciente();
    this.createFormConsulta();
    this.buscarEspecialidades();
  }

  createFormPaciente() {
    this.formPaciente = this.formBuilder.group({
      cpf: [this.formPaciente.value.cpf, Validators.minLength(11)],
      sus: [this.formPaciente.value.sus, Validators.minLength(15)]
    });
  }

  createFormConsulta() {
    this.formConsulta = this.formBuilder.group({
      medico: [this.formConsulta.value.medico, Validators.required],
      especialidade: [this.formConsulta.value.especialidade, Validators.required],
      comentario: this.formConsulta.value.comentario,
    });
  }

  buscarEspecialidades() {
    this.especialidadeService.buscarEspecialidades().subscribe((res) => {
      console.log(res);
      this.especialidades = res;
    })
  }

  pesquisaCPF() {
    this.pacienteService.buscarPaciente(this.formPaciente.value.cpf, '0').subscribe((res) => {
      if(res.length !== 0) {
        this.paciente = res;
      }
    })
    this.pesquisadoCPF = true;
    this.pesquisadoSUS = false;
    this.pacienteSelecionado = undefined;
  }

  pesquisaSUS() {
    this.pacienteService.buscarPaciente('0', this.formPaciente.value.sus).subscribe((res) => {
      if(res.length !== 0) {
        this.paciente = res;
      }
    })
    this.pacienteSelecionado = undefined;
    this.pesquisadoSUS = true;
    this.pesquisadoCPF = false;
  }

  selecionarPaciente() {
    this.pacienteSelecionado = this.paciente;
  }

  selecionarEspecialidade() {
    console.log(this.formConsulta.value);
    
    this.especialidadeService.buscarMedicoEspecialidade(this.formConsulta.value.especialidade.idEspecialidade).subscribe((res) => {
      this.listaMedicos = res;
      console.log(this.listaMedicos);
      
    });
  }

  selecionarMedico() {
    this.medicoSelecionado = this.formConsulta.value.medico;
  }

  selecionarData(data: NgbDate) {
    this.horarioSelecionado = undefined;
    this.dataSelecionada = data.year.toString() + '-' + data.month.toString() + '-' + data.day.toString();
    // this.consultaService.buscarHorariosDisponiveis(this.dataSelecionada, this.medicoSelecionado!).subscribe((res) => {
    //   this.horariosDisponiveis = res;
    //   console.log(res);
      
    // })
  }

  selecionarHorario(horario: String) {
    this.horarioSelecionado = horario;
  }

  marcarConsulta() {
    let request = {
      paciente: this.pacienteSelecionado,
      medico: this.medicoSelecionado,
      dataHora: this.dataSelecionada,
      comentario: this.formConsulta.value.comentario
    }
    this.consultaService.criarConsulta(request).subscribe((res)=> {
      this.modalConfig.modalTitle = 'Consulta cadastrada com sucesso';
        this.modalConfig.closeButtonLabel = 'Ok'
        this.modalConfig.hideDismissButton = true;
        this.modalConfig.mustRefresh = true;
        this.openModal();
    },() => {
      this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = true;
      this.openModal();
    })
  }

  async openModal() {
    return await this.modalComponent!.open()
  }
}
