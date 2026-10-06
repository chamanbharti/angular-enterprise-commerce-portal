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

  it('should find a product by id', () => {
    const product = service.findById(101);

    expect(product).toBeDefined();
    expect(product?.id).toBe(101);
    expect(product?.sku).toBe('LAP-1001');
    expect(product?.name).toBe('Business Laptop Pro');
  });

  it('should return undefined when product does not exist', () =>{
    const product = service.findById(999);
    expect(product).toBeUndefined();
  });


});