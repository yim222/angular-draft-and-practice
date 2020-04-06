import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCSSComponent } from './scss.component';

describe('SCSSComponent', () => {
  let component: SCSSComponent;
  let fixture: ComponentFixture<SCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
