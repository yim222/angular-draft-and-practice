import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponentAComponent } from './sub-component-a.component';

describe('SubComponentAComponent', () => {
  let component: SubComponentAComponent;
  let fixture: ComponentFixture<SubComponentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComponentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComponentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
