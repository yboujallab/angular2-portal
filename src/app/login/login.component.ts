import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';
import { Token } from '../objects/token';
import { NgForm }    from '@angular/forms';
import { ErrorsUtilService } from '../shared/errors.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit {
//@Input() token : Token;
user: User;
error: any;
token : Token;

constructor(
    private loginService: LoginService,
    private router: Router,
    private errorsUtilService:ErrorsUtilService) { }

  ngOnInit() {
  this.user = new User();
  //this.token = new Token();
  }

  signin(event){
    this.loginService
         .authenticate(this.user)
         .then(res => {
            // localStorage.setItem('auth_token', token.access_token);
             this.goToHomePage();
          })
         .catch(error => this.error = this.errorsUtilService.getAuthenticationErrorMsg(error));
   }

   goToHomePage(){
   let link = ['/home'];
   this.router.navigate(link);
   }

   goToForgotPassword(){
     this.router.navigate(['/forgot']);
   }

}
