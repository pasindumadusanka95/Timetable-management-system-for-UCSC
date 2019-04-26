import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallListComponent } from './hall-list.component';

describe('HallListComponent', () => {
  let component: HallListComponent;
  let fixture: ComponentFixture<HallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
