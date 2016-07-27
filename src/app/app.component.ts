import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from './login/login.service';
import { ErrorsUtilService } from './shared/errors.service';
import { LoggedInGuard } from './login/logged-in.guard';
import { Token } from './objects/token';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    LoginService,
    ErrorsUtilService
  ]
})
export class AppComponent {
  title = 'Hawala Care Portal';
  token : Token;
  constructor(private loginService:LoginService) {
  this.token = this.loginService.token;
  }
}
