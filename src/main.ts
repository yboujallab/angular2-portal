import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide }          from '@angular/core';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders }   from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';
import { LoggedInGuard } from './app/login/logged-in.guard';
import { LoginService } from './app/login/login.service';



if (environment.production) {
  enableProdMode();
}

//bootstrap(AppComponent);
bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    LoggedInGuard,
    LoginService
]);
