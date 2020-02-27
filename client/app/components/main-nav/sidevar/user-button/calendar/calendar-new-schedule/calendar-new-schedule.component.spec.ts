import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarNewScheduleComponent } from './calendar-new-schedule.component';

describe('CalendarNewScheduleComponent', () => {
  let component: CalendarNewScheduleComponent;
  let fixture: ComponentFixture<CalendarNewScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarNewScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarNewScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
