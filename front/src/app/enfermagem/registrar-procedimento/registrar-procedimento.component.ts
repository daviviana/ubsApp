import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/atendente/paciente';
import { PacienteService } from 'src/app/atendente/paciente.service';
import { ProcedimentoService } from '../procedimento.service';
import { Procedimento } from './registrar-procedimento';

@Component({
  selector: 'app-registrar-procedimento',
  templateUrl: './registrar-procedimento.component.html',
  styleUrls: ['./registrar-procedimento.component.scss']
})
export class RegistrarProcedimentoComponent implements OnInit {
  formProcedimento: FormGroup = new FormGroup({});
  pesquisadoCPF: boolean = false;
  pesquisadoSUS: boolean = false;
  paciente: Paciente | undefined;
  pacienteSelecionado: Paciente | undefined;
  listaProcedimentosPaciente: Array<Procedimento> | undefined;
  listaProcedimentos: Array<Procedimento> | undefined;
  hoje: any | undefined;
  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private procedimentoService: ProcedimentoService, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.hoje = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    this.criarFormPaciente();
    this.buscarListaProcedimento();
  }
  criarFormPaciente() {
    this.formProcedimento = this.formBuilder.group({
      cpf: [this.formProcedimento.value.cpf, Validators.minLength(11)],
      sus: [this.formProcedimento.value.sus, Validators.minLength(15)]
    });
  }

  buscarListaProcedimento() {
    this.procedimentoService.buscarListaProcedimento().subscribe((res) => {
      this.listaProcedimentos = res
    })
  }

  pesquisaCPF() {
    this.pacienteService.buscarPaciente(this.formProcedimento.value.cpf, '0').subscribe((res) => {
      if (res.length !== 0) {
        this.paciente = res;
        this.procedimentoService.buscarProcedimentosPaciente(this.paciente!).subscribe((res) => {
          this.listaProcedimentosPaciente = res;
          this.listaProcedimentosPaciente = this.listaProcedimentosPaciente!.sort(function (a, b) {
            return a.data! > b.data! ? -1 : a.data! < b.data! ? 1 : 0;
          });
        })
        this.pesquisadoCPF = true;
        this.pesquisadoSUS = false;
        this.pacienteSelecionado = undefined;
      }
    })
  }

  pesquisaSUS() {
    this.pacienteService.buscarPaciente('0', this.formProcedimento.value.sus).subscribe((res) => {
      if (res.length !== 0) {
        this.paciente = res;
        this.procedimentoService.buscarProcedimentosPaciente(this.paciente!).subscribe((res) => {
          this.listaProcedimentosPaciente = res;
          this.listaProcedimentosPaciente = this.listaProcedimentosPaciente!.sort(function (a, b) {
            return a.data! > b.data! ? -1 : a.data! < b.data! ? 1 : 0;
          });
        })
        this.pacienteSelecionado = undefined;
        this.pesquisadoSUS = true;
        this.pesquisadoCPF = false;
      }
    })
  }

  selecionarPaciente() {
    this.pacienteSelecionado = this.paciente;
  }

  testaData(data: any | undefined) {
    console.log(this.listaProcedimentosPaciente);

    let dataConsulta = data!.split("/");
    let dataFormatada = new Date((parseInt(dataConsulta[2])), (parseInt(dataConsulta[1])) - 1, (parseInt(dataConsulta[0])));
    if (dataFormatada > new Date()) {
      return false;
    } else {
      return true;
    }
  }
}
