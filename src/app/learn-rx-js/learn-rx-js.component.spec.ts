import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnRxJSComponent } from './learn-rx-js.component';

describe('LearnRxJSComponent', () => {
  let component: LearnRxJSComponent;
  let fixture: ComponentFixture<LearnRxJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnRxJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
