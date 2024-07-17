import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatButton, MatDivider, MatSidenavModule, MatIcon, MatToolbar, MatToolbarRow,
    MatMenu, MatMenuModule, RouterModule, MatMenuModule, MatCardModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {

  constructor(private log:LogoutService){}

  logout():void{
    this.log.logout();
  }
}
