import { Component } from '@angular/core';
import {
  AuthenticationResult,
  PublicClientApplication,
} from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { UsuarioService } from './services/usuario.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'azure-taskboard';
  //TODO - Passar para uma service
  constructor(private usuarioService: UsuarioService){} // constructor(private usuarioService: UsuarioService, private http: HttpClient){}

  async ngOnInit() {
    const user = await this.usuarioService.login();
    console.log('user', user);
    console.log("token", this.usuarioService.getBearerToken())
  }
}
