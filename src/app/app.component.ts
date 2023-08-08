import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'azure-taskboard';
  constructor() {}

  ngOnInit() {
    console.log(
      'auth',
      typeof environment.auth.clientId,
      environment.auth.clientId
    );
    console.log(
      'auth',
      typeof environment.auth.redirectUri,
      environment.auth.redirectUri
    );
    console.log(
      'auth',
      typeof environment.auth.authority,
      environment.auth.authority
    );
    console.log(
      'auth',
      typeof environment.auth.scopes,
      environment.auth.scopes
    );
  }
}
