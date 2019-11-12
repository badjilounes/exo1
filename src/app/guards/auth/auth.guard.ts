import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ClientAuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private readonly authService: ClientAuthService) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
      return false;
    }
    return true;
  }
}
