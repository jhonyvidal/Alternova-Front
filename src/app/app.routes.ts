import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./modules/login/login.component')
    },
    {
        path: 'register',
        loadComponent: () => import('./modules/register/register.component')
    },
];
