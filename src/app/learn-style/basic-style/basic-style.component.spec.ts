import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStyleComponent } from './basic-style.component';

describe('BasicStyleComponent', () => {
  let component: BasicStyleComponent;
  let fixture: ComponentFixture<BasicStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
