import { TestBed } from '@angular/core/testing';

import { BookflightService } from './bookflight.service';

describe('BookflightService', () => {
  let service: BookflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
