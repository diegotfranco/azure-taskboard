import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private usuarioService : UsuarioService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usuarioService.getBearerToken;

    // const requestUrl: Array<any> = request.url.split('/'); // -> a que veio
    // const apiUrl: Array<any> = environment.apiUrl.split('/'); // -> a que deveria vir

    if (token) { //if (token && requestUrl[2] === apiUrl[2]) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          token: `${token}`
        }
      });
      return next.handle(request).pipe(catchError(err => {
        if (err instanceof HttpErrorResponse && err?.status === 401){
          this.usuarioService.logout();
        }
        return throwError(() => new Error(err?.message || 'Unknown error occurred'));
      }));
    }
    else {
      return next.handle(request);
    }
  }
}