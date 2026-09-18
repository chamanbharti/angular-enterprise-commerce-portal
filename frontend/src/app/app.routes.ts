import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { PageNotFound } from './features/page-not-found/page-not-found';
import { Products } from './features/products/products';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: '**',
        component: PageNotFound
    }
];
