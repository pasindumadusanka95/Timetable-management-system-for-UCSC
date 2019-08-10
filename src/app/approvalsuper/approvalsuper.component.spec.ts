import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalsuperComponent } from './approvalsuper.component';

describe('ApprovalsuperComponent', () => {
  let component: ApprovalsuperComponent;
  let fixture: ComponentFixture<ApprovalsuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalsuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalsuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
