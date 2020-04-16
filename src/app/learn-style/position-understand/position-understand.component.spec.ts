import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionUnderstandComponent } from './position-understand.component';

describe('PositionUnderstandComponent', () => {
  let component: PositionUnderstandComponent;
  let fixture: ComponentFixture<PositionUnderstandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionUnderstandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionUnderstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
