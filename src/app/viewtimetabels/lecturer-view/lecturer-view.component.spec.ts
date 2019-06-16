import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerViewComponent } from './lecturer-view.component';

describe('LecturerViewComponent', () => {
  let component: LecturerViewComponent;
  let fixture: ComponentFixture<LecturerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
