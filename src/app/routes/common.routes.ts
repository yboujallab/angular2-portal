import { provideRouter, RouterConfig }  from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PasswordComponent } from '../password/password.component';
import { LogoutComponent } from '../logout/logout.component';

export const  commonRoutes: RouterConfig = [
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
