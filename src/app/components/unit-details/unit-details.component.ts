import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';
import { Location } from '@angular/common';
import { UpdateCatsComponent } from '../update-cats/update-cats.component';
import { UpdateDescComponent } from '../update-desc/update-desc.component';

@Component({
  selector: 'app-unit-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, UpdateCatsComponent, UpdateDescComponent],
  templateUrl: './unit-details.component.html',
  styleUrl: './unit-details.component.scss'
})
export class UnitDetailsComponent implements OnInit {
  unitcode!: any;
  ngOnInit(): void {
      this.setunitcode();
  }

  constructor(private route:ActivatedRoute, private location:Location){}

  setunitcode(){

    this.unitcode= this.route.snapshot.paramMap.get('id');
  }

  goback(){
    this.location.back();
  }
}
