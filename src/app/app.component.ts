import { Component, AfterViewInit, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { LoginService } from './login/login.service';
import { ErrorsUtilService } from './shared/errors.service';
import {TranslateService} from 'ng2-translate/ng2-translate';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LoginService,
    ErrorsUtilService
  ]
})
export class AppComponent {

      private showMenu = false;
      constructor(private loginService:LoginService, translate: TranslateService, private cdr:ChangeDetectorRef) {
      var userLang = navigator.language.split('-')[0]; // use navigator lang if available
      userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';
      translate.setDefaultLang('en');
      translate.use(userLang);
      this.cdr = cdr;

  }
}
