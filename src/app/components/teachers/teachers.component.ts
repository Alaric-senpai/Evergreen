import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { LogoutService } from '../../services/logout.service';
import { UsermanagementService } from '../../services/usermanagement.service';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  userinfo: any = {};

  email = sessionStorage.getItem('email');


  @ViewChild('mainmenu') menu!: ElementRef;

  today: Date = new Date();

  constructor(private renderer: Renderer2, private log: LogoutService, private usermg: UsermanagementService) {}

  ngOnInit(): void {
    this.getuserinfo()
}

getuserinfo(){
  this.usermg.userinfo(this.email).subscribe(
    (response: any) =>{
      this.userinfo = response.user;
      console.log(this.userinfo || 'no user info set');
    },
    (error) =>{
      console.error(error);
    }
  )
}

  showmenu(): void {
    if (!this.menu) {
      console.error('Menu element is not initialized.');
      return;
    }

    try {
      const menuElement = this.menu.nativeElement;
      const hasShownClass = menuElement.classList.contains('shown');

      if (hasShownClass) {
        this.renderer.removeClass(menuElement, 'shown');
      } else {
        this.renderer.addClass(menuElement, 'shown');
      }
    } catch (error) {
      console.error(error);
    }
  }

  logout(){
    this.log.logout()
  }

}
