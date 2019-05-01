import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecnavbarComponent } from './lecnavbar.component';

describe('LecnavbarComponent', () => {
  let component: LecnavbarComponent;
  let fixture: ComponentFixture<LecnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
