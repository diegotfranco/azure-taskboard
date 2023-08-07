import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {}

  async deslogar(): Promise<any> {
    console.log('deslogou');
    await this.usuarioService.logout();
  }
}
