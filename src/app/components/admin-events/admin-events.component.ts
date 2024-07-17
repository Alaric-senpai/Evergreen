import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-admin-events',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatCardModule, MatButtonModule, MatMenuModule, DialogModule, ButtonModule
  ],
  templateUrl: './admin-events.component.html',
  styleUrl: './admin-events.component.scss'
})
export class AdminEventsComponent {

}
