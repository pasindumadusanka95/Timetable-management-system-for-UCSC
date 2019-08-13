import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalmodComponent } from './approvalmod.component';

describe('ApprovalmodComponent', () => {
  let component: ApprovalmodComponent;
  let fixture: ComponentFixture<ApprovalmodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalmodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalmodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
