import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  imports: [RouterLink],
  selector: 'app-product-details',
  styleUrl: './product-details.scss',
  templateUrl: './product-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  //  readonly productId = this.route.snapshot.paramMap.get('id');
  readonly productId = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
    ),
    {
      initialValue: null,
    },
  );

  readonly product = computed( () => {
    const id = this.productId();
    
    if(id === null){
      return undefined;
    }

    const numericId = Number(id);

    if(!Number.isInteger(numericId)){
      return undefined;
    }

    return this.productService.findById(numericId);
  });
}
