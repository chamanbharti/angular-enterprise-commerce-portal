import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.scss',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);

  //  readonly productId = this.route.snapshot.paramMap.get('id');
  readonly productId = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
    ),
    {
      initialValue: null,
    },
  );
}
