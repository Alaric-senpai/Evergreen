import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecTimetableComponent } from './lec-timetable.component';

describe('LecTimetableComponent', () => {
  let component: LecTimetableComponent;
  let fixture: ComponentFixture<LecTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecTimetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
