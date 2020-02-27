import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WageListOfStaffComponent } from './wage-list-of-staff.component';

describe('WageListOfStaffComponent', () => {
  let component: WageListOfStaffComponent;
  let fixture: ComponentFixture<WageListOfStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WageListOfStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WageListOfStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
