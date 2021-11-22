import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Remedios } from '../abastecimento';
import { FarmaciaService } from '../farmacia.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})

export class EstoqueComponent implements OnInit {
  pesquisarEstoque: FormGroup = new FormGroup({});
  listaRemedios: Array<Remedios> | undefined;
  pesquisa: string = '';
  constructor(private farmaciaService: FarmaciaService) {  }
  
  ngOnInit(): void {
    this.buscarRemedios();
  }
  
  buscarRemedios() {
    this.farmaciaService.buscarMedicamentos().subscribe((res) => {
      this.listaRemedios = res;
    })
  }
}
