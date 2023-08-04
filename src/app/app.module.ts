import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { AtividadesComponent } from './pages/atividades/atividades.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MencoesComponent } from './pages/mencoes/mencoes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    HomeComponent,
    AtividadesComponent,
    ComentariosComponent,
    MencoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
