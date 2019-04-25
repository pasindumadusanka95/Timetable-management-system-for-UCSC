import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstYearComponent } from './first-year.component';

describe('FirstYearComponent', () => {
  let component: FirstYearComponent;
  let fixture: ComponentFixture<FirstYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
