import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveComp2Component } from './recursive-comp2.component';

describe('RecursiveComp2Component', () => {
  let component: RecursiveComp2Component;
  let fixture: ComponentFixture<RecursiveComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
