import { computed, Service, signal } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS_MOCK } from '../data/products.mock';

@Service()
export class ProductService {
    private readonly _products = signal<Product[]>(PRODUCTS_MOCK);

  readonly products = this._products.asReadonly();

  readonly activeProductCount = computed(
    () => this._products().filter((product) => product.active).length,
  );
}
