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

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public cookieSrv: CookieService, private router: Router) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.cookieSrv.getItem('token')}`
      }
    });
    
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) {
            this.router.navigate(['login']);
        }
        return throwError(error);
      })    
    );
  }
}