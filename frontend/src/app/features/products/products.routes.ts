import { Routes } from '@angular/router';

import { ProductCreate } from './product-create/product-create';
import { ProductDetails } from './product-details/product-details';
import { ProductEdit } from './product-edit/product-edit';
import { Products } from './products';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    component: Products,
  },
  {
    path: 'new',
    component: ProductCreate,
  },
  {
    path: ':id',
    component: ProductDetails,
  },
  {
    path: ':id/edit',
    component: ProductEdit,
  },
];