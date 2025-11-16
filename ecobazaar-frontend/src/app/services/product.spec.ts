import { TestBed } from '@angular/core/testing';

class Product {}

describe('Product', () => {
  let service: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product]
    });
    service = TestBed.inject(Product);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
