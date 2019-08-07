import { TestBed, inject } from '@angular/core/testing';

import { ThirdyearsubjectsService } from './thirdyearsubjects.service';

describe('ThirdyearsubjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirdyearsubjectsService]
    });
  });

  it('should be created', inject([ThirdyearsubjectsService], (service: ThirdyearsubjectsService) => {
    expect(service).toBeTruthy();
  }));
});
