import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LogoutComponent implements OnInit {

  constructor(private loginService: LoginService,
  private router:Router) {}

  ngOnInit() {
      this.loginService.logout();
      this.goToLoginPage();
  }

  goToLoginPage(){
      let link = [''];
      this.router.navigate(link);
  }

}
