import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CookieService } from '@ngx-toolkit/cookie';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientAuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly authService: ClientAuthService) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
            this.authService.logout();
        }
        return throwError(error);
      })    
    );
  }
}