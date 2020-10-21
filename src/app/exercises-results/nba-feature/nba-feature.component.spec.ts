import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAFeatureComponent } from './nba-feature.component';

describe('NBAFeatureComponent', () => {
  let component: NBAFeatureComponent;
  let fixture: ComponentFixture<NBAFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NBAFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NBAFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
