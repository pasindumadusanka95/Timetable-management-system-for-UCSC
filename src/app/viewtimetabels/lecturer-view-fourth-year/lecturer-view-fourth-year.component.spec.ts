import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerViewFourthYearComponent } from './lecturer-view-fourth-year.component';

describe('LecturerViewFourthYearComponent', () => {
  let component: LecturerViewFourthYearComponent;
  let fixture: ComponentFixture<LecturerViewFourthYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerViewFourthYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerViewFourthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
