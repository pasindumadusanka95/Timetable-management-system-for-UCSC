import { TestBed, inject } from '@angular/core/testing';

import { HallsService } from './halls.service';

describe('HallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallsService]
    });
  });

  it('should be created', inject([HallsService], (service: HallsService) => {
    expect(service).toBeTruthy();
  }));
});
