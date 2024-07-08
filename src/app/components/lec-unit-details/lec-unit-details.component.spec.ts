import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecUnitDetailsComponent } from './lec-unit-details.component';

describe('LecUnitDetailsComponent', () => {
  let component: LecUnitDetailsComponent;
  let fixture: ComponentFixture<LecUnitDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecUnitDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
