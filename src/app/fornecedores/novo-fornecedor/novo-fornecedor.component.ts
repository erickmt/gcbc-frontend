import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-novo-fornecedor',
  templateUrl: './novo-fornecedor.component.html',
  styleUrls: ['./novo-fornecedor.component.scss', '../../estilo/componentes.scss']
})
export class NovoFornecedorComponent implements OnInit {
  public novoFornecedor!: FormGroup;
  private validar = false;
  public irParaFornecedores = () => this.router.navigate(['fornecedores']);

  constructor(private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router) { }

  ngOnInit(): void {
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
    this.irParaFornecedores();
  }

  formFornecedorInvalido = (campo: string) => this.validar && this.novoFornecedor.controls[campo].status == 'INVALID';
}
