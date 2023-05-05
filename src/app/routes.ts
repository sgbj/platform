import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  { path: '', loadComponent: () => import('./home/home.component') },
  { path: 'chat', loadComponent: () => import('./chat/chat.component') },
  { path: 'wiki', loadComponent: () => import('./wiki/wiki.component') },
];
