import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {}
