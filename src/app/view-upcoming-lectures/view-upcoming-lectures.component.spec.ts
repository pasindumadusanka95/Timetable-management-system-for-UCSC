import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUpcomingLecturesComponent } from './view-upcoming-lectures.component';

describe('ViewUpcomingLecturesComponent', () => {
  let component: ViewUpcomingLecturesComponent;
  let fixture: ComponentFixture<ViewUpcomingLecturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUpcomingLecturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUpcomingLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
