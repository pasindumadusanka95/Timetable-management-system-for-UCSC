import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerViewSecondYearComponent } from './lecturer-view-second-year.component';

describe('LecturerViewSecondYearComponent', () => {
  let component: LecturerViewSecondYearComponent;
  let fixture: ComponentFixture<LecturerViewSecondYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerViewSecondYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerViewSecondYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
