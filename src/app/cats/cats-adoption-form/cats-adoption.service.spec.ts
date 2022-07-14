import { TestBed } from '@angular/core/testing';

import { CatsAdoptionService } from './cats-adoption.service';

describe('CatsAdoptionService', () => {
  let service: CatsAdoptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsAdoptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
