import { Injectable } from '@angular/core';
import fornecedorDao from '../dao/fornecedor-dao';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor() { }

  obter(id : number) : Fornecedor | undefined {
    return fornecedorDao.find(x=> x.id == id);
  }

  obterTodos() : Fornecedor[] {
    return fornecedorDao;
  }

  Adicionar(fornecedor: Fornecedor) {
    fornecedor.id = this.ultimoId();
    fornecedorDao.push(fornecedor);
  }

  private ultimoId() : number {
    let max = 0;
    fornecedorDao.forEach(x=> {
      if(x.id > max) max = x.id;
    })
    return max + 1;
  }
}
