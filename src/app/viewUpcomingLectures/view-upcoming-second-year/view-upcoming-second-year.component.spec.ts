import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingSecondYearComponent } from './view-upcoming-second-year.component';

describe('ViewUpcomingSecondYearComponent', () => {
  let component: ViewUpcomingSecondYearComponent;
  let fixture: ComponentFixture<ViewUpcomingSecondYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingSecondYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingSecondYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
