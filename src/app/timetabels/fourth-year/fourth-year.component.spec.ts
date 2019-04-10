import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthYearComponent } from './fourth-year.component';

describe('FourthYearComponent', () => {
  let component: FourthYearComponent;
  let fixture: ComponentFixture<FourthYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
