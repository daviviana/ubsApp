import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ModalConfig } from 'src/app/components/modal/modal.config';
import { ConsultaService } from 'src/app/services/consulta.service';
import { Consulta } from '../medico'

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.scss']
})
export class ListarConsultasComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent | undefined;
  modalConfig: ModalConfig = new ModalConfig();
  mensagemModal: String = '';

  data: NgbDate | undefined;
  listaConsultas: Array<any> | undefined;
  dataEscolhida: string | undefined;

  constructor(public formatter: NgbDateParserFormatter, calendar: NgbCalendar, private consultaService: ConsultaService) {
    this.data = calendar.getToday();
    this.dataEscolhida = this.data.year + '-' + this.data.month + '-' + this.data.day;
  }

  ngOnInit(): void {
  }

  escolherData(data: NgbDate) {
    this.dataEscolhida = data.year + '-' + data.month + '-' + data.day;
    this.buscarListaConsultas();
  }

  buscarListaConsultas() {
    this.consultaService.buscarListaConsultas(this.dataEscolhida!).subscribe((res) => {
      this.listaConsultas = res;

    })
  }

  cancelarConsulta(consulta: Consulta) {
    this.consultaService.cancelarConsulta(consulta).subscribe(() => {
      this.modalConfig.modalTitle = 'Paciente adicionado como ausente';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;
      this.openModal();
    },() => {
      this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;;
      this.openModal();
    })
  }

  finalizarConsulta(consulta: Consulta) {
    this.consultaService.finalizarConsulta(consulta).subscribe(() => {
      this.modalConfig.modalTitle = 'Consulta finalizada';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;;
      this.openModal();
    },() => {
      this.modalConfig.modalTitle = 'Um erro inesperado ocorreu, tente novamente';
      this.modalConfig.closeButtonLabel = 'Ok'
      this.modalConfig.hideDismissButton = true;
      this.modalConfig.mustRefresh = false;;
      this.openModal();
    })
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
export class NgbdDatepickerPopup {
  model: NgbDateStruct | undefined;
}