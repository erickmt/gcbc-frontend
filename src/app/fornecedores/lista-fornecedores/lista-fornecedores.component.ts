import { Component, OnInit } from '@angular/core';
import { Contrato } from 'src/app/models/contrato';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-lista-fornecedores',
  templateUrl: './lista-fornecedores.component.html',
  styleUrls: ['./lista-fornecedores.component.scss']
})
export class ListaFornecedoresComponent implements OnInit {
  public fornecedores : Fornecedor[] = [];

  constructor(private fornecedorService : FornecedorService) { }

  ngOnInit(): void {
    this.fornecedores = this.fornecedorService.obterTodos();
  }

}
