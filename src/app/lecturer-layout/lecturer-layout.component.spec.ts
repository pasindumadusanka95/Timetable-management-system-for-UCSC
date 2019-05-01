import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerLayoutComponent } from './lecturer-layout.component';

describe('LecturerLayoutComponent', () => {
  let component: LecturerLayoutComponent;
  let fixture: ComponentFixture<LecturerLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
