import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if (localStorage.getItem('auth_token')) { return true; }

  //we store the original url requested
  this.loginService.redirectUrl = state.url;

  // Navigate to the login page
  this.router.navigate(['/login']);
    return false;
  }


}
