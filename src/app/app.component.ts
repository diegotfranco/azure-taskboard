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
      'production',
      typeof environment.production,
      environment.production
    );
    console.log(
      'auth',
      typeof environment.clientId,
      environment.clientId
    );
    console.log(
      'auth',
      typeof environment.redirectUri,
      environment.redirectUri
    );
    console.log(
      'auth',
      typeof environment.authority,
      environment.authority
    );
    console.log(
      'auth',
      typeof environment.scopes,
      environment.scopes
    );
  }
}
