import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
} from '@angular/router';

import { ProductEdit } from './product-edit';

describe('ProductEdit', () => {
  let component: ProductEdit;
  let fixture: ComponentFixture<ProductEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEdit],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                id: '101',
              }),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read product id from route', () => {
    expect(component.productId).toBe('101');
  });
});