import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeStatementsComponent } from './fee-statements.component';

describe('FeeStatementsComponent', () => {
  let component: FeeStatementsComponent;
  let fixture: ComponentFixture<FeeStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeeStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
