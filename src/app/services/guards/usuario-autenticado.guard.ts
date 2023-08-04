import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService) { }

  canActivate(){
    if (this.usuarioService.userAuthenticated) {
      return true;
    }

    return false;
  }
}
