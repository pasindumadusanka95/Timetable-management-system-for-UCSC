import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminLayoutComponent } from './superadmin-layout.component';

describe('SuperadminLayoutComponent', () => {
  let component: SuperadminLayoutComponent;
  let fixture: ComponentFixture<SuperadminLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
