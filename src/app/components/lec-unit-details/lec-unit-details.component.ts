import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute } from '@angular/router';
import { GobackService } from '../../services/goback.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDescComponent } from '../update-desc/update-desc.component';
import { UpdateCatsComponent } from '../update-cats/update-cats.component';

@Component({
  selector: 'app-lec-unit-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './lec-unit-details.component.html',
  styleUrls: ['./lec-unit-details.component.scss']
})
export class LecUnitDetailsComponent implements OnInit {

  unitcode!: any;

  constructor(private route: ActivatedRoute, private back: GobackService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.setunitcode();
  }

  setunitcode() {
    this.unitcode = this.route.snapshot.paramMap.get('id');
  }

  goback() {
    this.back.goback();
  }

  updatedesc(): void {
    const dialogRef = this.dialog.open(UpdateDescComponent, { width: '450px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The update description dialog was closed');
    });
  }

  updatecats(): void {
    const dialogRef = this.dialog.open(UpdateCatsComponent, { width: '500px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The update CATs/exam dates dialog was closed');
    });
  }
}
