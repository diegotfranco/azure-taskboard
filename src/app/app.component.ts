import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'azure-taskboard';
  constructor(private usuarioService: UsuarioService){}

  async ngOnInit() {
    await this.usuarioService.login();
  }
}
