import { TestBed, inject } from '@angular/core/testing';

import { FourthyearsubjectsService } from './fourthyearsubjects.service';

describe('FourthyearsubjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FourthyearsubjectsService]
    });
  });

  it('should be created', inject([FourthyearsubjectsService], (service: FourthyearsubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
