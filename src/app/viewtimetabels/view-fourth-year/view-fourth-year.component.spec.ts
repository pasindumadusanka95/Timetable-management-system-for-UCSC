import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFourthYearComponent } from './view-fourth-year.component';

describe('ViewFourthYearComponent', () => {
  let component: ViewFourthYearComponent;
  let fixture: ComponentFixture<ViewFourthYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFourthYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFourthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
