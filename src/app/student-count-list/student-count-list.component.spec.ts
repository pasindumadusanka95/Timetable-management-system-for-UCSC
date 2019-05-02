import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCountListComponent } from './student-count-list.component';

describe('StudentCountListComponent', () => {
  let component: StudentCountListComponent;
  let fixture: ComponentFixture<StudentCountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
