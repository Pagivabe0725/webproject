import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,

  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


@Output() closeSideNav : EventEmitter<void> = new EventEmitter();
linkList:Array<string> = ['Welcome','Shop','Cart','Account','Login'];

constructor(private router : Router){}

navigate(link:string){
  this.closeSideNav.emit();
  this.router.navigateByUrl(`/${this.calculateUrl(link)}`);
}


calculateUrl(link:string){
  switch(link){
    case 'Login':
      return 'login-signup';
    case 'Shop':
      return link.toLowerCase()+`/${JSON.parse(localStorage.getItem('user')as string).userId}`;
    default:
      return link.toLowerCase();
  }
}

}
