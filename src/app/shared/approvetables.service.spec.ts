import { TestBed, inject } from '@angular/core/testing';

import { ApprovetablesService } from './approvetables.service';

describe('ApprovetablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApprovetablesService]
    });
  });

  it('should be created', inject([ApprovetablesService], (service: ApprovetablesService) => {
    expect(service).toBeTruthy();
  }));
});
