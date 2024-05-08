/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataFormService } from './data-form.service';

describe('Service: DataForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFormService]
    });
  });

  it('should ...', inject([DataFormService], (service: DataFormService) => {
    expect(service).toBeTruthy();
  }));
});
