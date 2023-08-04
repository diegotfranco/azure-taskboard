import { Component } from '@angular/core';
import {
  AuthenticationResult,
  PublicClientApplication,
} from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'azure-taskboard';
  //TODO - Passar para uma service
  constructor(private usuarioService: UsuarioService){}

  ngOnInit() {
    const user = this.usuarioService.login();
    console.log('user', user);
  }
}
