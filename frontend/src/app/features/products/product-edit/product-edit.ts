import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-product-edit',
  styleUrl: './product-edit.scss',
  templateUrl: './product-edit.html',
})
export class ProductEdit {
  private readonly route = inject(ActivatedRoute);

  // readonly productId = this.route.snapshot.paramMap.get('id');
  readonly productId = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
    ),
    {
      initialValue: null,
    },
  );
}
