import { provideRouter, RouterConfig }  from '@angular/router';
import { commonRoutes } from './routes/common.routes';
import { homeRoutes }   from './routes/home.routes';
import { dashBoardRoutes }   from './routes/dashboard.routes';


export const routes: RouterConfig = [
  ...commonRoutes,
  ...dashBoardRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
