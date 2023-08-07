import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MencoesComponent } from './pages/mencoes/mencoes.component';
import { RedirecionamentoLoginComponent } from './pages/redirecionamento-login/redirecionamento-login.component';
import { PaginaNaoEncontradaComponent } from './pages/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atividades', component: AtividadesComponent },
  { path: 'comentarios', component: ComentariosComponent },
  { path: 'mencoes', component: MencoesComponent },
  { path: 'login', component: RedirecionamentoLoginComponent },
  { path: '**', component: PaginaNaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
