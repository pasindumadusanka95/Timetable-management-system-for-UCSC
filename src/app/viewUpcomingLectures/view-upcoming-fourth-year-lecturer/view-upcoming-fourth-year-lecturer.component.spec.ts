import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingFourthYearLecturerComponent } from './view-upcoming-fourth-year-lecturer.component';

describe('ViewUpcomingFourthYearLecturerComponent', () => {
  let component: ViewUpcomingFourthYearLecturerComponent;
  let fixture: ComponentFixture<ViewUpcomingFourthYearLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingFourthYearLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingFourthYearLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
