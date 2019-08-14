import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingFirstYearLecturerComponent } from './view-upcoming-first-year-lecturer.component';

describe('ViewUpcomingFirstYearLecturerComponent', () => {
  let component: ViewUpcomingFirstYearLecturerComponent;
  let fixture: ComponentFixture<ViewUpcomingFirstYearLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingFirstYearLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingFirstYearLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
