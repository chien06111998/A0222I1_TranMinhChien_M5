import { TestBed } from '@angular/core/testing';

import { BackageService } from './backage.service';

describe('BackageService', () => {
  let service: BackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
