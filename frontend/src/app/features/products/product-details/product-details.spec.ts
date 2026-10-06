import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { ProductDetails } from './product-details';

describe('ProductDetails', () => {
  let component: ProductDetails;
  let fixture: ComponentFixture<ProductDetails>;

  const paramMapSubject = new BehaviorSubject(
    convertToParamMap({
      id: '101',
    }),
  );

  beforeEach(async () => {
    paramMapSubject.next(
      convertToParamMap({
        id: '101',
      }),
    );

    await TestBed.configureTestingModule({
      imports: [ProductDetails],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: paramMapSubject.asObservable(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetails);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should read product id from route', () => {
    expect(component.productId()).toBe('101');
  });

  it('should resolve product from route id', () => {
    const product = component.product();

    expect(product).toBeDefined();
    expect(product?.id).toBe(101);
    expect(product?.sku).toBe('LAP-1001');
    expect(product?.name).toBe('Business Laptop Pro');
  });

  it('should return undefined when product does not exist', () => {
    paramMapSubject.next(
      convertToParamMap({
        id: '999',
      }),
    );

    fixture.detectChanges();

    expect(component.productId()).toBe('999');
    expect(component.product()).toBeUndefined();
  });

  it('should return undefined for an invalid product id', () => {
    paramMapSubject.next(
      convertToParamMap({
        id: 'abc',
      }),
    );

    fixture.detectChanges();

    expect(component.productId()).toBe('abc');
    expect(component.product()).toBeUndefined();
  });

  it('should update product when route id changes', () => {
    expect(component.product()?.id).toBe(101);
    expect(component.product()?.name).toBe('Business Laptop Pro');

    paramMapSubject.next(
      convertToParamMap({
        id: '102',
      }),
    );

    fixture.detectChanges();

    expect(component.productId()).toBe('102');
    expect(component.product()?.id).toBe(102);
    expect(component.product()?.name).toBe('27-inch Office Monitor');
  });

  it('should render product details', () => {
    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Product Details');
    expect(element.textContent).toContain('LAP-1001');
    expect(element.textContent).toContain('Business Laptop Pro');
    expect(element.textContent).toContain('Electronics');
    expect(element.textContent).toContain('85000');
    expect(element.textContent).toContain('24');
    expect(element.textContent).toContain('Active');
  });

  it('should render product not found message for unknown product', () => {
    paramMapSubject.next(
      convertToParamMap({
        id: '999',
      }),
    );

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(element.textContent).toContain('Product not found.');
  });
});