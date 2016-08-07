import { provideRouter, RouterConfig }  from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { SendMoneyComponent } from '../sendmoney/sendmoney.component';
import { PasswordComponent } from '../password/password.component';
import { LoggedInGuard } from '../login/logged-in.guard';


export const dashBoardRoutes: RouterConfig = [
  {
    path: 'dashboard',
    component: MenuComponent,
    canActivate: [LoggedInGuard],
    children : [
      { path: '', component: HomeComponent},
      { path:'home', component: HomeComponent},
      { path:'sendmoney', component: SendMoneyComponent}
    ]
  }
];
