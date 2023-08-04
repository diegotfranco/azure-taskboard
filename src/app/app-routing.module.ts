import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MencoesComponent } from './pages/mencoes/mencoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'comentarios', component: ComentariosComponent },
  { path: 'mencoes', component: MencoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
