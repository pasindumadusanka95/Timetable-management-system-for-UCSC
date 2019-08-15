import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNoticeComponent } from './private-notice.component';

describe('PrivateNoticeComponent', () => {
  let component: PrivateNoticeComponent;
  let fixture: ComponentFixture<PrivateNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
