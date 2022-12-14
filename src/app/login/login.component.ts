import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { LogService } from '../services/log.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login!: FormGroup;
  public loginValido = true;
  public enviado = false;

  constructor(private formBuilder: FormBuilder, private logService: LogService,
    private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.novoLogin();

  }

  deslogar() {
    var usuario = this.usuarioService.usuarioAtual()
    if (usuario != null) {
      this.usuarioService.deslogar();
      this.logService.adicionar(usuario.nome, this.deslogou())
    }
  }

  novoLogin() {
    this.login = this.formBuilder.group({
      nome: ['', Validators.required],
      senha: ['', [Validators.required]]
    });
  }

  public entrar() {
    this.enviado = true;

    if (!this.login.valid)
      return;

    var usuario: Usuario = {
      nome: this.login.controls['nome'].value,
      senha: this.login.controls['senha'].value
    }

    if (this.usuarioService.existeUsuario(usuario)) {
      this.usuarioService.logar(usuario);
      this.logService.adicionar(usuario.nome, this.logou())
      this.router.navigate(['/']);
    }
    else {
      this.logService.adicionar(usuario.nome, this.falhou())
      this.loginValido = false;
    }

  }

  public cancelar() {
    this.router.navigate(['/']);
  }

  logou = () => "logou no sistema";
  deslogou = () => "saiu no sistema";
  falhou = () => "login ou senha inválido";
  formLoginInvalido = (campo: string) => this.enviado && this.login.controls[campo].status == 'INVALID';

}
