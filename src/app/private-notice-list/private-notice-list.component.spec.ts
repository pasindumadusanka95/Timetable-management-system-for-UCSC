import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNoticeListComponent } from './private-notice-list.component';

describe('PrivateNoticeListComponent', () => {
  let component: PrivateNoticeListComponent;
  let fixture: ComponentFixture<PrivateNoticeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateNoticeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNoticeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
