import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingFourthYearComponent } from './view-upcoming-fourth-year.component';

describe('ViewUpcomingFourthYearComponent', () => {
  let component: ViewUpcomingFourthYearComponent;
  let fixture: ComponentFixture<ViewUpcomingFourthYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingFourthYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingFourthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
