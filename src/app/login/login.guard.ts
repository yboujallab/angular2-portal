import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LogInGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
  console.log("begin");

    if (localStorage.getItem('auth_token'))  {
    this.router.navigate(['/dashboard']);
    console.log("false");
    return false;
  }

  console.log("true");
  // Navigate to the login page
  //this.router.navigate(['/login']);
  return true;
  }
}
