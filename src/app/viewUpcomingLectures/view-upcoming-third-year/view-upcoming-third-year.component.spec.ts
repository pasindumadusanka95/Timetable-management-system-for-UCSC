import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingThirdYearComponent } from './view-upcoming-third-year.component';

describe('ViewUpcomingThirdYearComponent', () => {
  let component: ViewUpcomingThirdYearComponent;
  let fixture: ComponentFixture<ViewUpcomingThirdYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingThirdYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingThirdYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
