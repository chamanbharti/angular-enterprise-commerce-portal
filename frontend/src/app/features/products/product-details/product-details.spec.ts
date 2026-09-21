import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ActivatedRoute,
  convertToParamMap,
  ParamMap,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { ProductDetails } from './product-details';

describe('ProductDetails', () => {
  let component: ProductDetails;
  let fixture: ComponentFixture<ProductDetails>;

  let paramMapSubject: BehaviorSubject<ParamMap>;

  beforeEach(async () => {
    paramMapSubject = new BehaviorSubject<ParamMap>(
      convertToParamMap({
        id: '101',
      }),
    );

    await TestBed.configureTestingModule({
      imports: [ProductDetails],
      providers: [
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

  it('should update product id when route parameter changes', () => {
    expect(component.productId()).toBe('101');

    paramMapSubject.next(
      convertToParamMap({
        id: '102',
      }),
    );

    fixture.detectChanges();

    expect(component.productId()).toBe('102');
  });
});