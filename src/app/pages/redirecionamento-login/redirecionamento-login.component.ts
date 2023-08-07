import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-redirecionamento-login',
  templateUrl: './redirecionamento-login.component.html',
  styleUrls: ['./redirecionamento-login.component.css'],
})
export class RedirecionamentoLoginComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {}

  async logar(): Promise<any> {
    await this.usuarioService.login();
  }
}
