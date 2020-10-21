import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDrawSquareComponent } from './simple-draw-square.component';

describe('SimpleDrawSquareComponent', () => {
  let component: SimpleDrawSquareComponent;
  let fixture: ComponentFixture<SimpleDrawSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDrawSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDrawSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
