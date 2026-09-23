import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { PRODUCTS_MOCK } from './data/products.mock';
import { Product } from './models/product';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  readonly products = signal<Product[]>(PRODUCTS_MOCK);
  readonly activeProductCount = computed(
    () => this.products().filter( (product) => product.active).length,
  );
}
