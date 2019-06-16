import { TestBed, async, inject } from '@angular/core/testing';

import { LecturerGuard } from './lecturer.guard';

xdescribe('LecturerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LecturerGuard]
    });
  });

  xit('should ...', inject([LecturerGuard], (guard: LecturerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
