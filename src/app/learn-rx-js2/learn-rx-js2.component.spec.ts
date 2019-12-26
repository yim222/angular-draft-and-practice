import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxJs2Component } from './learn-rx-js2.component';

describe('LearnRxJs2Component', () => {
  let component: LearnRxJs2Component;
  let fixture: ComponentFixture<LearnRxJs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnRxJs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnRxJs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
