import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../user-service/usuario.service';
import StringResources from 'src/app/commons/resources/string-resources';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  canActivate(){
    if (this.usuarioService.obterUsuarioLogado()) {
      return true;
    }

    this.router.navigate([StringResources.ROUTE_LOGIN]);

    return false;
  }
}
