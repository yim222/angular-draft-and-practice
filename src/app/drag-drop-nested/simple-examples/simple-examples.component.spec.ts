import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleExamplesComponent } from './simple-examples.component';

describe('SimpleExamplesComponent', () => {
  let component: SimpleExamplesComponent;
  let fixture: ComponentFixture<SimpleExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
