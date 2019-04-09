import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearComponent } from './second-year.component';

describe('SecondYearComponent', () => {
  let component: SecondYearComponent;
  let fixture: ComponentFixture<SecondYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
