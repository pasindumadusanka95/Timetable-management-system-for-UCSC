import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerViewFirstYearComponent } from './lecturer-view-first-year.component';

describe('LecturerViewFirstYearComponent', () => {
  let component: LecturerViewFirstYearComponent;
  let fixture: ComponentFixture<LecturerViewFirstYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerViewFirstYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerViewFirstYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
