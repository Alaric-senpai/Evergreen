import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-enrolled',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatTabsModule, MatDivider, RouterModule],
  templateUrl: './courses-enrolled.component.html',
  styleUrl: './courses-enrolled.component.scss'
})
export class CoursesEnrolledComponent {

}
