import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { PasswordComponent } from '../password/password.component';
import { LoggedInGuard } from '../login/logged-in.guard';
export const  homeRoutes: RouterConfig = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard]
  }
];
