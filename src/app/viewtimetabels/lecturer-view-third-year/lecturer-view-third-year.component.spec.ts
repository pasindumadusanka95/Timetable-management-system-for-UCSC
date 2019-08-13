import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerViewThirdYearComponent } from './lecturer-view-third-year.component';

describe('LecturerViewThirdYearComponent', () => {
  let component: LecturerViewThirdYearComponent;
  let fixture: ComponentFixture<LecturerViewThirdYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerViewThirdYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerViewThirdYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
