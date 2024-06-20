import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import HomeComponent from './modules/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./modules/login/login.component')
    },
    {
        path: 'register',
        loadComponent: () => import('./modules/register/register.component')
    },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
