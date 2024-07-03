import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatCardModule, MatMenuModule, MatButtonModule],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.scss'
})
export class NavigateComponent {

}
