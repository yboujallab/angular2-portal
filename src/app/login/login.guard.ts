import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LogInGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
  if (localStorage.getItem('auth_token')) {
    this.router.navigate(['/dashboard']);
    return false;
  }
  // Navigate to the login page
  this.router.navigate(['/']);
  return true;
  }
}
