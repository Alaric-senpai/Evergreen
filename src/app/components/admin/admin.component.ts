import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { GobackService } from '../../services/goback.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterOutlet, RouterModule, RouterLinkActive, RouterLink, MatSidenavModule,
    MatToolbarModule, MatIconModule, MatListModule
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnDestroy {
  mobilequery!: MediaQueryList;

  private _mobilequertlistener: () => void;

  constructor(private location:GobackService, changedetectorref: ChangeDetectorRef, media:MediaMatcher ){
    this.mobilequery = media.matchMedia('(max-width:1268px)');
    this._mobilequertlistener = () =>changedetectorref.detectChanges();
    this.mobilequery.addListener(this._mobilequertlistener);
  }

  ngOnDestroy(): void {
      this.mobilequery.removeListener(this._mobilequertlistener);
  }
  goback(){
    this.location.goback();
  }
}
