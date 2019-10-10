import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBuildUnderstandingComponent } from './ng-build-understanding.component';

describe('NgBuildUnderstandingComponent', () => {
  let component: NgBuildUnderstandingComponent;
  let fixture: ComponentFixture<NgBuildUnderstandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBuildUnderstandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBuildUnderstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
