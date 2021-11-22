import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FarmaciaService } from '../farmacia.service';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})

export class HistoricoComponent implements OnInit {

  data: NgbDate | undefined;
  dataEscolhida: string | undefined;
  listaRetiradas: any = [];

  constructor(public formatter: NgbDateParserFormatter, calendar: NgbCalendar, private farmaciaService: FarmaciaService) { 
    this.data = calendar.getToday();
    this.dataEscolhida = this.data.day + '/' + this.data.month + '/' + this.data.year;
  }

  ngOnInit(): void {
  }

  escolherData(data: NgbDate) {
    this.dataEscolhida = data.year + '-' + data.month + '-' + data.day;
    this.farmaciaService.buscarHistoricoRetirada(this.dataEscolhida, sessionStorage.getItem('idUnidade')).subscribe((res) =>{
      this.listaRetiradas = res;
      console.log(res);
      
    })
  }

  temRetirada() {
    let temRetirada = false;
    this.listaRetiradas!.forEach((retiradas: any) => {
      if (retiradas) temRetirada = true;
    });
    return temRetirada;
  }
}