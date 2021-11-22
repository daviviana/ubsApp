import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/atendente/paciente';
import { PacienteService } from 'src/app/atendente/paciente.service';
import { VacinaService } from '../vacina.service';
import { Vacina } from './registrar-vacina';

@Component({
  selector: 'app-registrar-vacina',
  templateUrl: './registrar-vacina.component.html',
  styleUrls: ['./registrar-vacina.component.scss']
})
export class RegistrarVacinaComponent implements OnInit {
  formVacina: FormGroup = new FormGroup({});
  pesquisadoCPF: boolean = false;
  pesquisadoSUS: boolean = false;
  paciente: Paciente | undefined;
  pacienteSelecionado: Paciente | undefined;
  listaVacinas: Array<any> | undefined;
  listaVacinasPaciente: Array<Vacina> | undefined;
  hoje: any | undefined;
  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe, private vacinaService: VacinaService, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.hoje = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    this.criarFormPaciente();
    this.buscarListaVacina();
  }

  criarFormPaciente() {
    this.formVacina = this.formBuilder.group({
      cpf: [this.formVacina.value.cpf, Validators.minLength(11)],
      sus: [this.formVacina.value.sus, Validators.minLength(15)]
    });
  }

  buscarListaVacina() {
    this.vacinaService.buscarListaVacina().subscribe((res) => {
      this.listaVacinas = res;
    })
  }

  pesquisaCPF() {
    this.pacienteService.buscarPaciente(this.formVacina.value.cpf, '0').subscribe((res) => {
      if(res.length !== 0) {
        this.paciente = res;
        this.getListaVacinaPaciente(this.paciente!);
        this.pesquisadoCPF = true;
        this.pesquisadoSUS = false;
        this.pacienteSelecionado = undefined;
      }
    })
  }

  pesquisaSUS() {
    this.pacienteService.buscarPaciente('0', this.formVacina.value.sus).subscribe((res) => {
      if(res.length !== 0) {
        this.paciente = res;
        this.getListaVacinaPaciente(this.paciente!);
        this.pacienteSelecionado = undefined;
        this.pesquisadoSUS = true;
        this.pesquisadoCPF = false;
      }
    })
  }

  getListaVacinaPaciente(paciente: Paciente) {
    this.vacinaService.buscarVacinasPaciente(paciente).subscribe((res) => {
      this.listaVacinasPaciente = res;
      this.listaVacinasPaciente = this.listaVacinasPaciente!.sort(function (a, b) {
        return a.data! > b.data! ? -1 : a.data! < b.data! ? 1 : 0;
      })
    });
  }

  selecionarPaciente() {
    this.pacienteSelecionado = this.paciente;
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
}
