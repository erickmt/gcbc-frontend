import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {
  
  public usuario : Usuario | null = null;
  
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuarioAtual();
  }
}
