import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommontableComponent } from './commontable.component';

describe('CommontableComponent', () => {
  let component: CommontableComponent;
  let fixture: ComponentFixture<CommontableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommontableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommontableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
