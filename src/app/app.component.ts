import { Component } from '@angular/core';
import {
  AuthenticationResult,
  PublicClientApplication,
} from '@azure/msal-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'azure-taskboard';
  //TODO - Passar para uma service
  userAuth?: AuthenticationResult;
  private publicClientApplication: PublicClientApplication =
    new PublicClientApplication({
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

  async ngOnInit() {
    let t = this.publicClientApplication.getAllAccounts();
    

    !t.length ?
    this.userAuth = await this.publicClientApplication.loginPopup({
      scopes: environment.auth.scopes,
      prompt: 'select_account',
    }):console.log('t', t);
    
  }
}
