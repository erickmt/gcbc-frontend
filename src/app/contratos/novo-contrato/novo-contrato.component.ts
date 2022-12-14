import { Component, OnInit } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato } from 'src/app/models/contrato';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LogService } from 'src/app/services/log.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-novo-contrato',
  templateUrl: './novo-contrato.component.html',
  styleUrls: ['./novo-contrato.component.scss', '../../estilo/componentes.scss']
})
export class NovoContratoComponent implements OnInit {
  public novoContrato!: FormGroup;
  public validar = false;
  private usuario : Usuario | undefined;

  constructor(private formBuilder: FormBuilder,
    private contratoService: ContratoService,
    private router: Router,
    private usuarioService : UsuarioService,
    private logService : LogService) { }

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuarioAtual()!;
    this.iniciaContrato();
  }

  iniciaContrato() {
    this.novoContrato = this.formBuilder.group({
      responsavel: ['', Validators.required],
      sede: ['', [Validators.required]],
      tipoContrato: ['', [Validators.required]]
    });
  }

  salvar() {
    if (this.novoContrato.invalid) {
      this.novoContrato.touched;
      this.validar = true;
      return;
    }
    this.validar = false;

    let contrato: Contrato = {
      criadoEm: new Date(Date.now()).toLocaleDateString(),
      responsavel: String(this.novoContrato.controls['responsavel'].value),
      sede: String(this.novoContrato.controls['sede'].value),
      status: 'novo',
      tipoContrato: String(this.novoContrato.controls['tipoContrato'].value),
      id: 0
    }

    this.contratoService.Adicionar(contrato);
    this.logService.adicionar(this.usuario!.nome, this.logAdicionou(contrato))
    this.irParaContratos();
  }

  irParaContratos = () => this.router.navigate(['contratos']);
  logAdicionou = (contrato : Contrato) => "adicionou o contrato " + contrato.id + " - " + contrato.tipoContrato + ", com status " + contrato.status;

  formContratoInvalido = (campo: string) => this.validar && this.novoContrato.controls[campo].status == 'INVALID';
}
