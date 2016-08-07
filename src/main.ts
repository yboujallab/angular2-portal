import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide, PLATFORM_PIPES }          from '@angular/core';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { appRouterProviders }   from './app/app.routes';
import { HTTP_PROVIDERS, Http } from '@angular/http';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';
import { LoggedInGuard } from './app/login/logged-in.guard';
import { LogInGuard } from './app/login/login.guard';
import { LoginService } from './app/login/login.service';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';



if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    TRANSLATE_PROVIDERS,
    LoggedInGuard,
    LogInGuard,
    LoginService,
    {provide: PLATFORM_PIPES, useValue: TranslatePipe, multi: true},
    provide(TranslateLoader, {
        useFactory: (http:Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
    })
]);
