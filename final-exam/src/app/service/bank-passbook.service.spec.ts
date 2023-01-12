import { TestBed } from '@angular/core/testing';

import { BankPassbookService } from './bank-passbook.service';

describe('BankPassbookService', () => {
  let service: BankPassbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankPassbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
