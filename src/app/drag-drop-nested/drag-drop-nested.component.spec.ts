import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropNestedComponent } from './drag-drop-nested.component';

describe('DragDropNestedComponent', () => {
  let component: DragDropNestedComponent;
  let fixture: ComponentFixture<DragDropNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
