import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnServiceComponent } from './learn-service.component';

describe('LearnServiceComponent', () => {
  let component: LearnServiceComponent;
  let fixture: ComponentFixture<LearnServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
