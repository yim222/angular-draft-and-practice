import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnStyleComponent } from './learn-style.component';

describe('LearnStyleComponent', () => {
  let component: LearnStyleComponent;
  let fixture: ComponentFixture<LearnStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
