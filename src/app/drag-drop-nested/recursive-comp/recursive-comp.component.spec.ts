import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveCompComponent } from './recursive-comp.component';

describe('RecursiveCompComponent', () => {
  let component: RecursiveCompComponent;
  let fixture: ComponentFixture<RecursiveCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
