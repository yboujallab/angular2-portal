import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PasswordComponent } from '../password/password.component';
import { LogoutComponent } from '../logout/logout.component';
import { LogInGuard } from '../login/login.guard';
import { LoggedInGuard } from '../login/logged-in.guard';

export const  commonRoutes: RouterConfig = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LogInGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LogInGuard]
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
