import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecEventsComponent } from './lec-events.component';

describe('LecEventsComponent', () => {
  let component: LecEventsComponent;
  let fixture: ComponentFixture<LecEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
