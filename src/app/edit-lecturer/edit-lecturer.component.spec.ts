import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLecturerComponent } from './edit-lecturer.component';

describe('EditLecturerComponent', () => {
  let component: EditLecturerComponent;
  let fixture: ComponentFixture<EditLecturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLecturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
