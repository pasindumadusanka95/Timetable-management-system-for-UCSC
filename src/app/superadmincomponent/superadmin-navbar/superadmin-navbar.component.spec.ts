import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminNavbarComponent } from './superadmin-navbar.component';

describe('SuperadminNavbarComponent', () => {
  let component: SuperadminNavbarComponent;
  let fixture: ComponentFixture<SuperadminNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
