import { Component, OnInit } from '@angular/core';
import { Profissional } from './gerenciar-plantoes';
import { NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gerenciar-plantoes',
  templateUrl: './gerenciar-plantoes.component.html',
  styleUrls: ['./gerenciar-plantoes.component.scss']
})
export class GerenciarPlantoesComponent implements OnInit {

  // Esse component foi abandonado por questões de adaptação. 
  // Será mantido, pois implementação futura utilizará de seus recursos































  listaProfissionais: Array<Profissional> | undefined;
  profissionalEscolhido: Profissional | undefined;
  especialidade: String | undefined;

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null = null;
  toDate: NgbDate | null = null;
  singleDate: NgbDate | null = null;
  minDate: NgbDate;
  tipoDeFolga: String | undefined;

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.minDate = calendar.getToday();
  }

  ngOnInit(): void {
    this.listaProfissionais = [
      { nome: 'Jorge', credencial: '123' },
      { nome: 'Alberto', credencial: '456' },
      { nome: 'Carlos', credencial: '789' },
      { nome: 'Jorge', credencial: '369' }
    ]; 
  }
  
  limpaProfissional() {
    this.fromDate = null;
    this.toDate = null;
    if(this.tipoDeFolga !== 'Feriado') {
      this.singleDate = null;
    }
    this.profissionalEscolhido = undefined;
  }
  
  limpaEspecialidade() {
    this.especialidade = undefined;
    this.limpaProfissional();
  }
  
  enviar() {
  }
  
  // Funções do datepicker com range
  
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }
  
  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }
}