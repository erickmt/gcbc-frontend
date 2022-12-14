import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  public usuario : Usuario | null = null;
  
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuarioAtual();
  }

}
