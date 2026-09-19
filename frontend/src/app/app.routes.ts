import { Routes } from '@angular/router';
import { PageNotFound } from './features/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        loadComponent: () => 
            import('./features/dashboard/dashboard')
        .then(m => m.Dashboard)
    },
    {
        path: 'products',
        loadComponent: () => 
            import('./features/products/products')
        .then(m => m.Products)
    },
    {
        path: '**',
        component: PageNotFound
    }
];
