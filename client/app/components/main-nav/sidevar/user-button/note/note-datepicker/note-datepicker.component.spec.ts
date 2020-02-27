import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDatepickerComponent } from './note-datepicker.component';

describe('NoteDatepickerComponent', () => {
  let component: NoteDatepickerComponent;
  let fixture: ComponentFixture<NoteDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
