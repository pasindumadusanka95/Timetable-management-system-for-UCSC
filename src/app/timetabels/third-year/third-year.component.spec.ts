import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdYearComponent } from './third-year.component';

describe('ThirdYearComponent', () => {
  let component: ThirdYearComponent;
  let fixture: ComponentFixture<ThirdYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
