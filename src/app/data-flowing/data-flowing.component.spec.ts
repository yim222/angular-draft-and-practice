import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFlowingComponent } from './data-flowing.component';

describe('DataFlowingComponent', () => {
  let component: DataFlowingComponent;
  let fixture: ComponentFixture<DataFlowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFlowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFlowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
