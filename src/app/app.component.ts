import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Usuario } from './models/usuario';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menu : boolean = false;
  public usuario : Usuario | null = null;

  constructor(private router: Router, private usuarioService : UsuarioService) {

  }

  
  ngOnInit() {


    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          this.usuario = this.usuarioService.usuarioAtual();

          let route: ActivatedRoute = this.router.routerState.root;
          while (route!.firstChild) {
            route = route.firstChild;
          }
          
          route.data.subscribe(data => {
            if(data['menu'] != null)
              this.menu = data['menu'];
            else
              this.menu = true;
          })

        })
      ).subscribe();

  }

}