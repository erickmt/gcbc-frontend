import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Usuario } from 'src/app/models/usuario';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { LogService } from 'src/app/services/log.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-novo-fornecedor',
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.scss', '../../estilo/componentes.scss']
})
export class NovoFornecedorComponent implements OnInit {
  public novoFornecedor!: FormGroup;
  private validar = false;
  public irParaFornecedores = () => this.router.navigate(['fornecedores']);
  private usuario : Usuario | undefined;

  constructor(private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
    private usuarioService : UsuarioService,
    private logService : LogService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuarioAtual()!;
    this.iniciaFornecedor();
  }

  iniciaFornecedor() {
    this.novoFornecedor = this.formBuilder.group({
      razaoSocial: ['', Validators.required],
      cnpj: ['', [Validators.required]]
    });
  }

  salvar() {
    if (this.novoFornecedor.invalid) {
      this.novoFornecedor.touched;
      this.validar = true;
      return;
    }
    this.validar = false;

    let fornecedor: Fornecedor = {
      criadoEm: new Date(Date.now()).toLocaleDateString(),
      razaoSocial: String(this.novoFornecedor.controls['razaoSocial'].value),
      cnpj: String(this.novoFornecedor.controls['cnpj'].value),
      status: 'novo',
      id: 0
    }

    this.fornecedorService.Adicionar(fornecedor);
    this.logService.adicionar(this.usuario!.nome, this.logAdicionou(fornecedor))
    this.irParaFornecedores();
  }

  logAdicionou = (fornecedor : Fornecedor) => "adicionou o fornecedor " + fornecedor.id + " " + fornecedor.razaoSocial + ", com status " + fornecedor.status;
  formFornecedorInvalido = (campo: string) => this.validar && this.novoFornecedor.controls[campo].status == 'INVALID';
}
