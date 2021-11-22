import { Component, OnInit } from '@angular/core';
import { Unidade } from '../unidade';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'app-listar-unidades',
  templateUrl: './listar-unidades.component.html',
  styleUrls: ['./listar-unidades.component.scss']
})
export class ListarUnidadesComponent implements OnInit {

  listaUnidades: Array<Unidade> | undefined;

  constructor(private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.buscarUnidades();
  }

  buscarUnidades() {
    this.unidadeService.listarUnidades().subscribe((res)=>{
      this.listaUnidades = res;
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

}
