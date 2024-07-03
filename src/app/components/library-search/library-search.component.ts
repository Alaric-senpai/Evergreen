import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-library-search',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './library-search.component.html',
  styleUrl: './library-search.component.scss'
})
export class LibrarySearchComponent {

}
