import { Injectable } from '@angular/core';
import { AccountInfo, AuthenticationResult } from '@azure/msal-browser';
import { PublicClientApplication } from '@azure/msal-browser/dist/app/PublicClientApplication';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioLogado } from '../types/UsuarioLogado';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private publicClientApplication: PublicClientApplication =
    {} as PublicClientApplication;
  public userAuthenticated?: AccountInfo = {} as AccountInfo;
  constructor(private location: Location, private router: Router) {
    this.publicClientApplication = new PublicClientApplication({
      auth: {
        clientId: environment.auth.clientId,
        redirectUri: environment.auth.redirectUri,
        authority: environment.auth.authority,
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true,
      },
    });
  }

  public async login(): Promise<UsuarioLogado> {
    const usuarioLogado = this.obterUsuarioLogado();
    if (usuarioLogado) return usuarioLogado;

    await this.publicClientApplication
      .loginPopup({
        scopes: environment.auth.scopes,
        prompt: 'select_account',
      })
      .then((result: AuthenticationResult) => {
        this.userAuthenticated = result.account!;
        this.location.back();
      })
      .catch((error) => {
        console.log(error);
        alert('Usuário não autenticado corretamente.');
      });

    if (!this.userAuthenticated) {
      throw new Error('Usuário não autenticado corretamente.');
    }

    const usuariologado: UsuarioLogado = {
      username: this.userAuthenticated.username,
      name: this.userAuthenticated.name!,
    };

    return usuariologado;
  }

  public async logout() {
    await this.publicClientApplication
      .logoutPopup()
      .then(() => this.router.navigate(['login']));
  }

  public async getBearerToken(): Promise<string> {
    try {
      if (!this.userAuthenticated) throw new Error('Usuário não autenticado.');

      const response = await this.publicClientApplication.acquireTokenSilent({
        scopes: environment.auth.scopes,
        account: this.userAuthenticated,
      });

      if (response.accessToken) {
        return response.accessToken;
      } else {
        throw new Error('Não foi possível obter o token de acesso.');
      }
    } catch (error) {
      console.error('Erro ao obter o token de acesso:', error);
      throw error;
    }
  }

  public obterUsuarioLogado(): UsuarioLogado | null {
    const accounts = this.publicClientApplication.getAllAccounts();
    if (accounts.length > 0) {
      this.userAuthenticated = accounts[0];
      const usuariologado: UsuarioLogado = {
        username: this.userAuthenticated.username,
        name: this.userAuthenticated.name!,
      };
      return usuariologado;
    }
    return null;
  }
}
