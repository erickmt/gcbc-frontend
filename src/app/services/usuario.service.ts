import { Injectable } from '@angular/core';
import usuarioDao from '../dao/usuario-dao';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() { }

  public adicionar(usuario: Usuario){
    usuarioDao.adicionar(usuario);
  }

  public remover(usuario: Usuario){
    usuarioDao.remover(usuario);
  }

  public logar(usuario: Usuario){
    usuarioDao.logar(usuario);
  }

  public deslogar(){
    usuarioDao.deslogar();
  }

  public usuarioAtual(){
    return usuarioDao.atual();
  }

  public existeUsuario(usuario : Usuario) {
    return usuarioDao.existeUsuario(usuario);
  }

  public obterTodos(): Usuario[] {
    return usuarioDao.obterTodos();
  }
}
