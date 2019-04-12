import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFirstYearComponent } from './view-first-year.component';

describe('ViewFirstYearComponent', () => {
  let component: ViewFirstYearComponent;
  let fixture: ComponentFixture<ViewFirstYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFirstYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFirstYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
