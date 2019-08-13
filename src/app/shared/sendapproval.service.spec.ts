import { TestBed, inject } from '@angular/core/testing';

import { SendapprovalService } from './sendapproval.service';

describe('SendapprovalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendapprovalService]
    });
  });

  it('should be created', inject([SendapprovalService], (service: SendapprovalService) => {
    expect(service).toBeTruthy();
  }));
});
