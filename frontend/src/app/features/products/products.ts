import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  // readonly products = signal<Product[]>(PRODUCTS_MOCK);
  // readonly activeProductCount = computed(
  //   () => this.products().filter( (product) => product.active).length,
  // );

  // using service
  private readonly productService = inject(ProductService);
  readonly products = this.productService.products;
  readonly activeProductCount = this.productService.activeProductCount;
}
