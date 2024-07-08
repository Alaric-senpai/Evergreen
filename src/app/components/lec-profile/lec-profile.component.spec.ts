import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecProfileComponent } from './lec-profile.component';

describe('LecProfileComponent', () => {
  let component: LecProfileComponent;
  let fixture: ComponentFixture<LecProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
