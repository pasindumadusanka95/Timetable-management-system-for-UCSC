import { TestBed, inject } from '@angular/core/testing';

import { SecondyearsubjectsService } from './secondyearsubjects.service';

describe('SecondyearsubjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondyearsubjectsService]
    });
  });

  it('should be created', inject([SecondyearsubjectsService], (service: SecondyearsubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
