import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContratosComponent } from './contratos/contratos.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { CrudMenuComponent } from './shared/crud-menu/crud-menu.component';
import { ListaContratosComponent } from './contratos/lista-contratos/lista-contratos.component';
import { ListaFornecedoresComponent } from './fornecedores/lista-fornecedores/lista-fornecedores.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCommonModule, MatNativeDateModule  } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { CalendarioComponent } from './calendario/calendario.component';
import { NovoContratoComponent } from './contratos/novo-contrato/novo-contrato.component';
import { NovoFornecedorComponent } from './fornecedores/novo-fornecedor/novo-fornecedor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudCalendarioComponent } from './calendario/crud-calendario/crud-calendario.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NovoUsuarioComponent } from './usuarios/novo-usuario/novo-usuario.component';
import { LogsComponent } from './logs/logs.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContratosComponent,
    FornecedoresComponent,
    CrudMenuComponent,
    ListaContratosComponent,
    ListaFornecedoresComponent,
    CalendarioComponent,
    NovoContratoComponent,
    NovoFornecedorComponent,
    CrudCalendarioComponent,
    LoginComponent,
    UsuariosComponent,
    NovoUsuarioComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatCommonModule, MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
