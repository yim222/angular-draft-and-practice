import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDataManagementMainComponent } from './state-data-management-main.component';

describe('StateDataManagementMainComponent', () => {
  let component: StateDataManagementMainComponent;
  let fixture: ComponentFixture<StateDataManagementMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDataManagementMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDataManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
