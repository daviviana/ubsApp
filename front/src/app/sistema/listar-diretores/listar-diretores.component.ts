import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/administrativo/funcionario';
import { FuncionarioService } from 'src/app/administrativo/funcionario.service';

@Component({
  selector: 'app-listar-diretores',
  templateUrl: './listar-diretores.component.html',
  styleUrls: ['./listar-diretores.component.scss']
})
export class ListarDiretoresComponent implements OnInit {

  listaDiretores: Array<any> | undefined;
  
  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.buscarDiretores();
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

  buscarDiretores() {
    this.funcionarioService.buscarListaDiretores().subscribe((res) => {
      this.listaDiretores = res      
    })
  }

}
