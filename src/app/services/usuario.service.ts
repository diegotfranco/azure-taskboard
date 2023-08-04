import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccountInfo, AuthenticationResult } from '@azure/msal-browser';
import { PublicClientApplication } from '@azure/msal-browser/dist/app/PublicClientApplication';
import { NativeAccountInfo } from '@azure/msal-browser/dist/broker/nativeBroker/NativeResponse';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private publicClientApplication: PublicClientApplication =
    {} as PublicClientApplication;
  public userAuthenticated?: AccountInfo = {} as AccountInfo;
  constructor() {
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

  public async login(): Promise<AccountInfo> {
    await this.publicClientApplication
      .loginPopup({
        scopes: environment.auth.scopes,
        prompt: 'select_account',
      })
      .then((result: AuthenticationResult) => {
        this.userAuthenticated = result.account!;
      })
      .catch((error) => {
        console.log(error);
        alert('Usuário não autenticado corretamente.');
      });

    if (!this.userAuthenticated) {
      throw new Error('Usuário não autenticado corretamente.');
    }

    return this.userAuthenticated;
  }

  public logout = (): Promise<void> =>
    this.publicClientApplication.logoutPopup();

  public async getBearerToken(): Promise<string> {
    try {
      // Verifica se o usuário está autenticado
      if (!this.userAuthenticated) 
        throw new Error('Usuário não autenticado.');
            
      // Obtenha o token de acesso usando acquireTokenSilent
      const response = await this.publicClientApplication.acquireTokenSilent(
        {
          // Defina os escopos para obter o token
          scopes: environment.auth.scopes,
          account: this.userAuthenticated,
        }
      );

      // Verifica se a resposta contém o token de acesso
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
}
