import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioService } from '../usuario.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private usuarioService : UsuarioService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.usuarioService.getBearerToken;

    if (token) {
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