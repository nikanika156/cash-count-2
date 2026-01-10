import { TestBed } from '@angular/core/testing';

import { Summation } from './summation';

describe('Summation', () => {
  let service: Summation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Summation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
