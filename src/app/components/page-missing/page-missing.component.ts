import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-missing',
  standalone: true,
  imports: [],
  templateUrl: './page-missing.component.html',
  styleUrl: './page-missing.component.scss'
})
export class PageMissingComponent {

  constructor(private location:Location){}

  goback(){
    this.location.back();
  }
}

