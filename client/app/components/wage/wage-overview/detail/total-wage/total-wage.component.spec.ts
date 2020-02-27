import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWageComponent } from './total-wage.component';

describe('TotalWageComponent', () => {
  let component: TotalWageComponent;
  let fixture: ComponentFixture<TotalWageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalWageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalWageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
