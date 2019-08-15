import { TestBed, inject } from '@angular/core/testing';

import { PrivateNoticeService } from './private-notice.service';

describe('PrivateNoticeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateNoticeService]
    });
  });

  it('should be created', inject([PrivateNoticeService], (service: PrivateNoticeService) => {
    expect(service).toBeTruthy();
  }));
});
