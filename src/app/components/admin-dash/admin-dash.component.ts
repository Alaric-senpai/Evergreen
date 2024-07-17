import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatExpansionModule, MatIconModule],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.scss'
})
export class AdminDashComponent {
  
}
