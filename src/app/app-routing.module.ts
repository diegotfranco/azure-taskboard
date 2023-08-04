import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MencoesComponent } from './pages/mencoes/mencoes.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent, 
    canActivate: [UsuarioAutenticadoGuard]
  },
  { path: 'atividades', 
    component: AtividadesComponent, 
    canActivate: [UsuarioAutenticadoGuard] 
  },
  { 
    path: 'comentarios', 
    component: ComentariosComponent, 
    canActivate: [UsuarioAutenticadoGuard] 
  },
  { 
    path: 'mencoes', 
    component: MencoesComponent, 
    canActivate: [UsuarioAutenticadoGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
