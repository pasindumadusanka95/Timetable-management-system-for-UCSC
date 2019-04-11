import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecondYearComponent } from './view-second-year.component';

describe('ViewSecondYearComponent', () => {
  let component: ViewSecondYearComponent;
  let fixture: ComponentFixture<ViewSecondYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSecondYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSecondYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
