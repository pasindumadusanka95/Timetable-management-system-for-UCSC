import { TestBed, async, inject } from '@angular/core/testing';

import { LecturerGuard } from './lecturer.guard';

describe('LecturerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LecturerGuard]
    });
  });

  it('should ...', inject([LecturerGuard], (guard: LecturerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
