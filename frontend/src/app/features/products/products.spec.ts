import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Products } from './products';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the mock products', () => {
    expect(component.products().length).toBe(5);
  });

  it('should calculate active product count', () => {
    expect(component.activeProductCount()).toBe(3);
  });

  it('should recalculate active product count when products change', () => {
    expect(component.activeProductCount()).toBe(3);

    component.products.update((products) =>
      products.map((product) =>
        product.id === 103
          ? {
              ...product,
              active: true,
            }
          : product,
      ),
    );

    expect(component.activeProductCount()).toBe(4);
  });
});