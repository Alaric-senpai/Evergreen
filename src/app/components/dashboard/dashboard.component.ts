import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { ChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { ResultsComponent } from '../results/results.component';
import { UsermanagementService } from '../../services/usermanagement.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatCardModule, MatIconModule, MatToolbarModule, MatTabsModule, MatMenuModule, ResultsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  email = sessionStorage.getItem('email');
  userinfo: any[] = [];
  constructor(private user: UsermanagementService){}

  ngOnInit(): void {
      
  }

  getuserinfo(){
    this.user.userinfo(this.email).subscribe(
      response =>{
        this.userinfo = response.user
      }
    )
  }
}
