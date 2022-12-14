import { Injectable } from '@angular/core';
import logsDao from '../dao/log-dao';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  adicionar(usuario : string, descricao : string){
    var log : Log = {
      id : logsDao.ultimoId(),
      usuario,
      descricao,
      data : new Date(Date.now()).toLocaleDateString()
    };

    logsDao.adicionar(log);
  }

  obterTodos() : Log[]{
    return logsDao.obterTodos();
  }
}
