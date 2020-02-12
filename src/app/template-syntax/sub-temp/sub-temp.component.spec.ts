import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTempComponent } from './sub-temp.component';

describe('SubTempComponent', () => {
  let component: SubTempComponent;
  let fixture: ComponentFixture<SubTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
