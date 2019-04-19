import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecsidebarComponent } from './lecsidebar.component';

describe('LecsidebarComponent', () => {
  let component: LecsidebarComponent;
  let fixture: ComponentFixture<LecsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
