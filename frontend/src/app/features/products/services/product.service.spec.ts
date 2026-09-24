import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose all products', () => {
    expect(service.products().length).toBe(5);
  });

  it('should expose the expected first product', () => {
    expect(service.products()[0]).toEqual(
      expect.objectContaining({
        id: 101,
        sku: 'LAP-1001',
        name: 'Business Laptop Pro',
      }),
    );
  });

  it('should calculate active product count', () => {
    expect(service.activeProductCount()).toBe(3);
  });
});