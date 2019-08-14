import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingSecondYearLecturerComponent } from './view-upcoming-second-year-lecturer.component';

describe('ViewUpcomingSecondYearLecturerComponent', () => {
  let component: ViewUpcomingSecondYearLecturerComponent;
  let fixture: ComponentFixture<ViewUpcomingSecondYearLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingSecondYearLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingSecondYearLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
