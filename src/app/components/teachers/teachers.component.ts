import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

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
export class TeachersComponent implements AfterViewInit {

  @ViewChild('mainmenu') menu!: ElementRef;

  today: Date = new Date();

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // This method will be called after the view has been initialized
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
}
