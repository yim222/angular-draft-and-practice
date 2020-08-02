import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFundamentalsComponent } from './angular-fundamentals.component';

describe('AngularFundamentalsComponent', () => {
  let component: AngularFundamentalsComponent;
  let fixture: ComponentFixture<AngularFundamentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFundamentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFundamentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
