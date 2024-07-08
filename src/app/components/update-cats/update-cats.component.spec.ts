import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatsComponent } from './update-cats.component';

describe('UpdateCatsComponent', () => {
  let component: UpdateCatsComponent;
  let fixture: ComponentFixture<UpdateCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
