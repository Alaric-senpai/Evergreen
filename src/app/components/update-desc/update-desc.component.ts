import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-update-desc',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, MatStepperModule, MatFormFieldModule],
  templateUrl: './update-desc.component.html',
  styleUrls: ['./update-desc.component.scss']
})
export class UpdateDescComponent {
  isLinear = false;

  constructor(private dialogRef: MatDialogRef<UpdateDescComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
