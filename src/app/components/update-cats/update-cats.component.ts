import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-cats',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatStepperModule, MatFormFieldModule, MatDatepickerModule],
  templateUrl: './update-cats.component.html',
  styleUrls: ['./update-cats.component.scss']
})
export class UpdateCatsComponent {
  isLinear = false;

  constructor(private dialogRef: MatDialogRef<UpdateCatsComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
