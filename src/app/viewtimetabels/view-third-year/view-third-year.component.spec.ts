import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewThirdYearComponent } from './view-third-year.component';

describe('ViewThirdYearComponent', () => {
  let component: ViewThirdYearComponent;
  let fixture: ComponentFixture<ViewThirdYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewThirdYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewThirdYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
