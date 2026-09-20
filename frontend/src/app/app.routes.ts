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
        .then(m => m.Dashboard),
    },
    {
        path: 'products',
        loadChildren: () => 
            import('./features/products/products.routes')
        .then(m => m.PRODUCT_ROUTES),
    },
    {
        path: '**',
        component: PageNotFound
    }
];
