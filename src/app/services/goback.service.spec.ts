import { TestBed } from '@angular/core/testing';

import { GobackService } from './goback.service';

describe('GobackService', () => {
  let service: GobackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GobackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
