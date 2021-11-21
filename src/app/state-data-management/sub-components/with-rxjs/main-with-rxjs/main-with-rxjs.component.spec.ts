import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWithRxjsComponent } from './main-with-rxjs.component';

describe('MainWithRxjsComponent', () => {
  let component: MainWithRxjsComponent;
  let fixture: ComponentFixture<MainWithRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWithRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
