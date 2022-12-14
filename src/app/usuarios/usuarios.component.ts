import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { LogService } from '../services/log.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios : Usuario[] = [];
  private usuario : Usuario | undefined;

  constructor(private usuarioService : UsuarioService, private logService : LogService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuarioAtual()!;
    this.obterTodosUsuarios();
  }
  
  obterTodosUsuarios() {
    this.usuarios = this.usuarioService.obterTodos();
  }

  remover(usuario : Usuario){
    this.usuarioService.remover(usuario);
    this.logService.adicionar(this.usuario!.nome, this.logRemoveu(usuario))
    this.obterTodosUsuarios();
  }

  logRemoveu = (usuario : Usuario) => "removeu o usuario " + usuario.nome;
}
