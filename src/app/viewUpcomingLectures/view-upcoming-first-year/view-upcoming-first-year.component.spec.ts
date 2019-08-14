import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingFirstYearComponent } from './view-upcoming-first-year.component';

describe('ViewUpcomingFirstYearComponent', () => {
  let component: ViewUpcomingFirstYearComponent;
  let fixture: ComponentFixture<ViewUpcomingFirstYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingFirstYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingFirstYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
