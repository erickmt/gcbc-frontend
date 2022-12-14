import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss']
})
export class FornecedoresComponent implements OnInit {

  public usuario : Usuario | null = null;
  
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuarioAtual();
  }

}
