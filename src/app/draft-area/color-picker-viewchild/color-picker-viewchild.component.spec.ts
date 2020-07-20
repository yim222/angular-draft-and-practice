import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerViewchildComponent } from './color-picker-viewchild.component';

describe('ColorPickerViewchildComponent', () => {
  let component: ColorPickerViewchildComponent;
  let fixture: ComponentFixture<ColorPickerViewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerViewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
