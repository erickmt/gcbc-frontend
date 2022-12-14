import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evento } from 'src/app/models/evento';
import { Usuario } from 'src/app/models/usuario';
import { EventoService } from 'src/app/services/evento.service';
import { LogService } from 'src/app/services/log.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crud-calendario',
  templateUrl: './crud-calendario.component.html',
  styleUrls: ['./crud-calendario.component.scss']
})
export class CrudCalendarioComponent implements OnInit {
  public novoEvento!: FormGroup;
  public validar = false;
  public eventos : Evento[] = [];
  private usuario : Usuario | undefined;

  constructor(private formBuilder: FormBuilder, 
    private eventoService : EventoService,
    private usuarioService : UsuarioService,
    private logService : LogService) { }

  ngOnInit(): void {
    this.iniciaEvento();
    this.todosEventos();
    this.usuario = this.usuarioService.usuarioAtual()!;
  }

  iniciaEvento(){
    this.novoEvento = this.formBuilder.group({
      titulo: ['', Validators.required],
      data: ['', [Validators.required]],
      tipo: ['', [Validators.required]]
    });
  }

  public salvar(){
    if(this.novoEvento.invalid){
      this.novoEvento.touched;
      this.validar = true;
      return;
    }
    this.validar = false;

    let evento : Evento = {
      data: new Date(this.novoEvento.controls['data'].value).toLocaleDateString(),
      titulo : String(this.novoEvento.controls['titulo'].value),
      tipo : String(this.novoEvento.controls['tipo'].value),
      id : 0
    }

    this.eventoService.Adicionar(evento);
    this.logService.adicionar(this.usuario!.nome, this.logAdicionou(evento))
    this.todosEventos();
  }

  public remover(evento : Evento){
    this.eventoService.Remover(evento);
    this.logService.adicionar(this.usuario!.nome, this.logRemoveu(evento))
    this.todosEventos();
  }

  todosEventos(){
    this.eventos = this.eventoService.obterTodos();
  }

  formEventoInvalido = (campo : string) =>  this.validar && this.novoEvento.controls[campo].status == 'INVALID';
  logAdicionou = (evento : Evento) => "adicionou o evento " + evento.id + " - " + evento.titulo + ", dia " + evento.data;
  logRemoveu = (evento : Evento) => "removeu o evento " + evento.id + " - " + evento.titulo;
}
