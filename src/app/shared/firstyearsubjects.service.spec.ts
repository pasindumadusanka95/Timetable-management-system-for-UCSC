import { TestBed, inject } from '@angular/core/testing';

import { FirstyearsubjectsService } from './firstyearsubjects.service';

describe('FirstyearsubjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstyearsubjectsService]
    });
  });

  it('should be created', inject([FirstyearsubjectsService], (service: FirstyearsubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
