import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { GobackService } from '../../services/goback.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterOutlet, RouterModule, RouterLinkActive, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  constructor(private location:GobackService){}

  goback(){
    this.location.goback();
  }
}
