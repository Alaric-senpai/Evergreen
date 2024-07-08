import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecCoursesComponent } from './lec-courses.component';

describe('LecCoursesComponent', () => {
  let component: LecCoursesComponent;
  let fixture: ComponentFixture<LecCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
