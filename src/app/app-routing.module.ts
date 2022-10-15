import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContratosComponent } from './contratos/contratos.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { NovoContratoComponent } from './contratos/novo-contrato/novo-contrato.component';
import { NovoFornecedorComponent } from './fornecedores/novo-fornecedor/novo-fornecedor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contratos', component: ContratosComponent },
  { path: 'contratos/novo', component: NovoContratoComponent },
  { path: 'fornecedores/novo', component: NovoFornecedorComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'calendario', component: CalendarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
