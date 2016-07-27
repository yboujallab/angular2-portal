import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { LogoutComponent } from './logout/logout.component';
import { LoggedInGuard } from './login/logged-in.guard';

const routes: RouterConfig = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: '',
    component: LoginComponent,
    terminal: true
  },
  {
    path: 'forgot',
    component: PasswordComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
