import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/user-service/usuario.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  user: any;

  ngOnInit() {}

  async deslogar(): Promise<any> {
    await this.usuarioService.logout();
  }
}
