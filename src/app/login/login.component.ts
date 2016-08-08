import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Router, provideRouter, RouterConfig  } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
import { ErrorsUtilService } from '../shared/errors.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
user: User;
error: any;

constructor(
    private loginService: LoginService,
    private router: Router,
    private errorsUtilService:ErrorsUtilService) { }

  ngOnInit() {
    this.user = new User();
  }

  signin(event){
    this.loginService
         .authenticate(this.user)
         .then(res => {
              let redirect = this.loginService.redirectUrl ? this.goToRequestedPage(this.loginService.redirectUrl) : this.goToHomePage();
          })
         .catch(error => this.error = this.errorsUtilService.getAuthenticationErrorMsg(error));
   }

   goToHomePage(){
     let link = ['/dashboard'];
     this.router.navigate(link);
   }

   goToRequestedPage(redirectUrl){
     this.router.navigate([redirectUrl]);
   }

   goToForgotPassword(){
     this.router.navigate(['/forgot']);
   }

}
