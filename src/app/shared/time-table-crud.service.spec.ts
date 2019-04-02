import { TestBed, inject } from '@angular/core/testing';

import { TimeTableCRUDService } from './time-table-crud.service';

describe('TimeTableCRUDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeTableCRUDService]
    });
  });

  it('should be created', inject([TimeTableCRUDService], (service: TimeTableCRUDService) => {
    expect(service).toBeTruthy();
  }));
});
