import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Paciente } from 'src/app/atendente/paciente';
import { PacienteService } from 'src/app/atendente/paciente.service';

@Component({
  selector: 'app-gerar-receita',
  templateUrl: './gerar-receita.component.html',
  styleUrls: ['./gerar-receita.component.scss']
})
export class GerarReceitaOrtodontiaComponent implements OnInit {

  // Esse component foi abandonado por questões de adaptação. 
  // Será mantido, pois implementação futura utilizará de seus recursos
































  hoje: string | undefined;
  formReceita: FormGroup = new FormGroup({});
  formPaciente: FormGroup = new FormGroup({});
  paciente: Paciente | undefined;
  pacienteSelecionado: Paciente | undefined;
  pesquisadoCPF: boolean = false;
  pesquisadoSUS: boolean = false;

  constructor(calendar: NgbCalendar, private formBuilder: FormBuilder, private pacienteService: PacienteService) {
    let hoje = calendar.getToday();
    this.hoje = hoje.day + '/' + hoje.month + '/' + hoje.year;
  }

  ngOnInit(): void {
    this.createForm();
    this.createFormPaciente();
  }

  createForm() {
    this.formReceita = this.formBuilder.group({
      receita: [this.formReceita.value.receita, Validators.required],
      nomeMedicamento: [this.formReceita.value.nomeMedicamente, Validators.required],
      paciente: [this.formReceita.value.paciente, Validators.required],
      dosagem: [this.formReceita.value.dosagem, Validators.required],
      posologia: [this.formReceita.value.posologia, Validators.required],
      formaFarmaceutica: [this.formReceita.value.formaFarmaceutica, Validators.required],
      quantidade: [this.formReceita.value.quantidade, Validators.required],
      //medico
      data: [this.hoje, Validators.required]
    })
  }

  createFormPaciente() {
    this.formPaciente = this.formBuilder.group({
      cpf: [this.formPaciente.value.cpf, Validators.minLength(11)],
      sus: [this.formPaciente.value.sus, Validators.minLength(15)]
    });
  }

  gerar() {
    console.log(this.formReceita);
  }

  pesquisaCPF() {
    this.pacienteService.buscarPaciente(this.formPaciente.value.cpf, '0').subscribe((res) => {
      if(res.length !== 0) {
        this.paciente = res;
        this.pesquisadoCPF = true;
        this.pesquisadoSUS = false;
        this.pacienteSelecionado = undefined;
      }
    })
  }

  pesquisaSUS() {
    this.pacienteService.buscarPaciente('0', this.formPaciente.value.sus).subscribe((res) => {
      this.paciente = res;
      this.pacienteSelecionado = undefined;
      this.pesquisadoSUS = true;
      this.pesquisadoCPF = false;
    })
  }

  selecionarPaciente() {
    this.pacienteSelecionado = this.paciente;
    this.formReceita.controls.paciente.setValue(this.paciente);
  }
}