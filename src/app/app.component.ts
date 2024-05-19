import { AfterContentChecked, Component, OnDestroy, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatDrawer, MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButton } from '@angular/material/button'
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './Components/menu/menu.component';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    FlexLayoutModule,
    MenuComponent,
    MatBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'webproject';
  productInCart: number = 0;

  constructor(private router: Router)  {
     
  }

  ngOnDestroy(): void {
    localStorage.removeItem('user')
  }

  openSidenav(sidenav: MatDrawer) {
    sidenav.toggle();
  }

  closeSideNav(sidenav: MatDrawer) {
    sidenav.close();
  }

  navigate(link: string) {
    this.router.navigateByUrl(`/${link}`)
  }

  close(){
    localStorage.setItem('user',JSON.stringify(null));
    this.router.navigateByUrl('/login-signup/login')
  }


}
