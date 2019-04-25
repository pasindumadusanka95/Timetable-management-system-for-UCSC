import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerDashboardComponent } from './lecturer-dashboard.component';

describe('LecturerDashboardComponent', () => {
  let component: LecturerDashboardComponent;
  let fixture: ComponentFixture<LecturerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
