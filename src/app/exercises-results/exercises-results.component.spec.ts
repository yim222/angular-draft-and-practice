import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesResultsComponent } from './exercises-results.component';

describe('ExercisesResultsComponent', () => {
  let component: ExercisesResultsComponent;
  let fixture: ComponentFixture<ExercisesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
