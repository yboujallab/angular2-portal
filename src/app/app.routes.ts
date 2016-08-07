import { provideRouter, RouterConfig }  from '@angular/router';
import { commonRoutes } from './routes/common.routes';
import { homeRoutes }   from './routes/home.routes';


export const routes: RouterConfig = [
  ...homeRoutes,
  ...commonRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
