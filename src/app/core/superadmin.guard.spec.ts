import { TestBed, async, inject } from '@angular/core/testing';

import { SuperadminGuard } from './superadmin.guard';

describe('SuperadminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperadminGuard]
    });
  });

  it('should ...', inject([SuperadminGuard], (guard: SuperadminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
