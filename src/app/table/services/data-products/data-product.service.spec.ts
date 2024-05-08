/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataProductService } from './data-product.service';

describe('Service: DataProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataProductService]
    });
  });

  it('should ...', inject([DataProductService], (service: DataProductService) => {
    expect(service).toBeTruthy();
  }));
});
