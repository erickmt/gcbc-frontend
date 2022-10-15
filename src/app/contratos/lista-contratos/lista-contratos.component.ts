import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/models/contrato';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.scss']
})
export class ListaContratosComponent implements OnInit {
  public contratos : Contrato[] = [];

  constructor(private contratoService : ContratoService) { }

  ngOnInit(): void {
    this.contratos = this.contratoService.obterTodos();
  }
}
