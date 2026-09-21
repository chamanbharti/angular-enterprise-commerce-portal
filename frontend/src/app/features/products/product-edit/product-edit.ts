import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-product-edit',
  styleUrl: './product-edit.scss',
  templateUrl: './product-edit.html',
})
export class ProductEdit {
  private readonly route = inject(ActivatedRoute);

  readonly productId = this.route.snapshot.paramMap.get('id');
}
