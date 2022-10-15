import { Injectable } from '@angular/core';
import contratoDao from '../dao/contato-dao';
import { Contrato } from '../models/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  
  constructor() { }

  obter(id : number) : Contrato | undefined {
    return contratoDao.find(x=> x.id == id);
  }

  obterTodos() : Contrato[] {
    return contratoDao;
  }

  Adicionar(contrato: Contrato) {
    contrato.id = this.ultimoId();
    contratoDao.push(contrato);
  }

  private ultimoId() : number {
    let max = 0;
    contratoDao.forEach(x=> {
      if(x.id > max) max = x.id;
    })
    return max + 1;
  }
}
