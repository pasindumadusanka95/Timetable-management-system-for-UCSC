import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsCountComponent } from './students-count.component';

describe('StudentsCountComponent', () => {
  let component: StudentsCountComponent;
  let fixture: ComponentFixture<StudentsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
