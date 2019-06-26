import { TestBed, inject } from '@angular/core/testing';

import { LecProfileService } from './lec-profile.service';

describe('LecProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LecProfileService]
    });
  });

  it('should be created', inject([LecProfileService], (service: LecProfileService) => {
    expect(service).toBeTruthy();
  }));
});
