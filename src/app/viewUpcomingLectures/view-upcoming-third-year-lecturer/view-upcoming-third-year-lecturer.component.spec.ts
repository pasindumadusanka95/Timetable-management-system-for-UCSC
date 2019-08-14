import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingThirdYearLecturerComponent } from './view-upcoming-third-year-lecturer.component';

describe('ViewUpcomingThirdYearLecturerComponent', () => {
  let component: ViewUpcomingThirdYearLecturerComponent;
  let fixture: ComponentFixture<ViewUpcomingThirdYearLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingThirdYearLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingThirdYearLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
