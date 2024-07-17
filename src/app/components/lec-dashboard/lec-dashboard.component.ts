import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { UsermanagementService } from '../../services/usermanagement.service';

@Component({
  selector: 'app-lec-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, RouterModule],
  templateUrl: './lec-dashboard.component.html',
  styleUrl: './lec-dashboard.component.scss'
})
export class LecDashboardComponent  {


  constructor(
    private usermg: UsermanagementService,
    
  ){}

  

}
