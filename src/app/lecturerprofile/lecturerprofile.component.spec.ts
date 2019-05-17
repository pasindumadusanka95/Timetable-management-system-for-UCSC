import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerprofileComponent } from './lecturerprofile.component';

describe('LecturerprofileComponent', () => {
  let component: LecturerprofileComponent;
  let fixture: ComponentFixture<LecturerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
