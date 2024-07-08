import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDescComponent } from './update-desc.component';

describe('UpdateDescComponent', () => {
  let component: UpdateDescComponent;
  let fixture: ComponentFixture<UpdateDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
