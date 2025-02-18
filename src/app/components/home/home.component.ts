import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, RouterModule, RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
