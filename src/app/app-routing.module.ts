import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MencoesComponent } from './pages/mencoes/mencoes.component';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import StringResources from './commons/string-resources';

const routes: Routes = [
  { 
    path: StringResources.ROUTE_HOME, 
    component: HomeComponent, 
    canActivate: [UsuarioAutenticadoGuard]
  },
  { 
    path: StringResources.ROUTE_ATIVIDADES, 
    component: AtividadesComponent, 
    canActivate: [UsuarioAutenticadoGuard] 
  },
  { 
    path: StringResources.ROUTE_COMENTARIOS, 
    component: ComentariosComponent, 
    canActivate: [UsuarioAutenticadoGuard] 
  },
  { 
    path: StringResources.ROUTE_MENCOES, 
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
