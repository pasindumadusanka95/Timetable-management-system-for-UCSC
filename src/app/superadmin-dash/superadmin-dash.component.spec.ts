import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminDashComponent } from './superadmin-dash.component';

describe('SuperadminDashComponent', () => {
  let component: SuperadminDashComponent;
  let fixture: ComponentFixture<SuperadminDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
