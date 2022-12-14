import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LogService } from 'src/app/services/log.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  public novoUsuario!: FormGroup;
  public validar = false;
  public usuarios : Usuario[] = [];
  public usuarioExiste : string | null = null;
  private usuario : Usuario | undefined;

  constructor(private formBuilder: FormBuilder, 
    private usuarioService : UsuarioService, private logService : LogService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuarioAtual()!;
    this.iniciaUsuario();
    this.todosUsuarios();
  }

  iniciaUsuario(){
    this.novoUsuario = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', [Validators.required]]
    });
  }

  public salvar(){
    this.usuarioExiste = null;
    
    if(this.novoUsuario.invalid){
      this.novoUsuario.touched;
      this.validar = true;
      return;
    }
    this.validar = false;

    let usuario : Usuario = {
      nome : String(this.novoUsuario.controls['nome'].value),
      senha: String(this.novoUsuario.controls['senha'].value)
    }

    if(this.usuarioService.existeUsuario(usuario))
    {
      this.usuarioExiste = usuario.nome;
      return;
    }

    this.usuarioService.adicionar(usuario);
    this.logService.adicionar(this.usuario!.nome, this.logAdicionou(usuario))
    this.todosUsuarios();
  }

  todosUsuarios(){
    this.usuarios = this.usuarioService.obterTodos();
  }

  logAdicionou = (usuario : Usuario) => "adicionou o usuario " + usuario.nome;
  formUsuarioInvalido = (campo : string) =>  this.validar && this.novoUsuario.controls[campo].status == 'INVALID';
}
