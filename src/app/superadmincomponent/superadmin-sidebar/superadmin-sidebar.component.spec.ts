import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminSidebarComponent } from './superadmin-sidebar.component';

describe('SuperadminSidebarComponent', () => {
  let component: SuperadminSidebarComponent;
  let fixture: ComponentFixture<SuperadminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
