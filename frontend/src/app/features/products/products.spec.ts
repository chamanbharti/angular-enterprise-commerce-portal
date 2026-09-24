import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
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

  it('should expose products from ProductService', () => {
    expect(component.products().length).toBe(5);
  });

  it('should expose active product count from ProductService', () => {
    expect(component.activeProductCount()).toBe(3);
  });

  it('should render product catalog', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Business Laptop Pro');
    expect(element.textContent).toContain('27-inch Office Monitor');
    expect(element.textContent).toContain('Ergonomic Office Chair');
  });

  it('should render active product count', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Active Products:');
    expect(element.textContent).toContain('3');
  });
});