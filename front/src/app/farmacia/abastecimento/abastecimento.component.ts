import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Abastecimento } from '../abastecimento';
import { FarmaciaService } from '../farmacia.service';

@Component({
  selector: 'app-abastecimento',
  templateUrl: './abastecimento.component.html',
  styleUrls: ['./abastecimento.component.scss']
})
export class AbastecimentoComponent implements OnInit {

  formAbastecimento: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder, private farmaciaService: FarmaciaService) { }

  ngOnInit(): void {
    this.createForm(new Abastecimento());
  }

  createForm(abastecimento: Abastecimento) {
    this.formAbastecimento = this.formBuilder.group({
      nome: [abastecimento.nome, [Validators.required]],
      fornecedor: [abastecimento.fornecedor, [Validators.required]],
      lote: [abastecimento.lote, [Validators.required]],
      quantidade: [abastecimento.quantidade, [Validators.required]],
      validade: [abastecimento.validade, [Validators.required]],
      idUnidade: [abastecimento.idUnidade]
    })
  }

  enviar() {
    this.formAbastecimento.controls.idUnidade.setValue(sessionStorage.getItem('idUnidade')); 
    this.farmaciaService.abastecer(this.formAbastecimento.getRawValue()).subscribe((res)=> {
      
      // modal sucesso
    })
  }

}
