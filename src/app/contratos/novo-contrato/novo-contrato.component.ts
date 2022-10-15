import { Component, OnInit } from '@angular/core';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato } from 'src/app/models/contrato';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-contrato',
  templateUrl: './novo-contrato.component.html',
  styleUrls: ['./novo-contrato.component.scss', '../../estilo/componentes.scss']
})
export class NovoContratoComponent implements OnInit {
  public novoContrato!: FormGroup;
  private validar = false;  
  public irParaContratos = () => this.router.navigate(['contratos']);

  constructor(private formBuilder: FormBuilder, 
    private contratoService : ContratoService,
    private router:Router) { }

  ngOnInit(): void {
    this.iniciaContrato();
  }

  iniciaContrato(){
    this.novoContrato = this.formBuilder.group({
      responsavel: ['', Validators.required],
      sede: ['', [Validators.required]],
      tipoContrato: ['', [Validators.required]]
    });
  }

  salvar(){
    if(this.novoContrato.invalid){
      this.novoContrato.touched;
      this.validar = true;
      return;
    }
    this.validar = false;

    let contrato : Contrato = {
      criadoEm: new Date(Date.now()).toLocaleDateString(),
      responsavel : String(this.novoContrato.controls['responsavel'].value),
      sede : String(this.novoContrato.controls['sede'].value),
      status : 'novo',
      tipoContrato : String(this.novoContrato.controls['tipoContrato'].value),
      id : 0
    }

    this.contratoService.Adicionar(contrato);
    this.irParaContratos();
  }

  formContratoInvalido = (campo : string) =>  this.validar && this.novoContrato.controls[campo].status == 'INVALID';
}
