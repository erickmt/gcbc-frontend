import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';
import eventoDao from '../dao/evento-dao';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  
  Remover(evento: Evento) {
    eventoDao.remover(evento.id);
  }

  constructor() { }

  obter(id : number) : Evento | undefined {
    return eventoDao.obter(id);
  }

  obterTodos() : Evento[] {
    return eventoDao.obterTodos();
  }

  Adicionar(evento: Evento) {
    evento.id = this.ultimoId();
    eventoDao.adicionar(evento);
  }

  private ultimoId() : number {
    let max = 0;
    eventoDao.obterTodos().forEach(x=> {
      if(x.id > max) max = x.id;
    })
    return max + 1;
  }
}
