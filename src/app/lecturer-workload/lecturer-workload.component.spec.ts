import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerWorkloadComponent } from './lecturer-workload.component';

describe('LecturerWorkloadComponent', () => {
  let component: LecturerWorkloadComponent;
  let fixture: ComponentFixture<LecturerWorkloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerWorkloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
