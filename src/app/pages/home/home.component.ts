import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/user-service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  user: any;

  async ngOnInit() {
    this.obterDadosDoUsuario();
    await this.usuarioService.accessAzureDevOps();
  }
  obterDadosDoUsuario() {
    this.user = this.usuarioService.obterUsuarioLogado();
  }
}
