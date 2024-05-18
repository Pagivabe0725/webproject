import {Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-filter-menu',
  templateUrl: './shop-filter-menu.component.html',
  styleUrl: './shop-filter-menu.component.scss'
})
export class ShopFilterMenuComponent {

  @Input() maxPriceValue?:number;
  @Input() minPriceValue?:number;
  @Input() fullPriceInFilter:number = 0;
  @Output() filterValues : EventEmitter<{ maxPrice: number |null |undefined, type: string | null }> = new EventEmitter();
  @Output() deleteFilters: EventEmitter<void> = new EventEmitter();
  filterType:string = 'None';
  actualPrice?:number;

  constructor(private cartService: CartService , private router : Router){}


  setActualPrice(price : number | undefined){
    if(price){
    this.actualPrice=price;
    }
  }

  filter(){
    console.log(this.filterType + ' ' + this.actualPrice)
    this.filterValues.emit({maxPrice:this.actualPrice !== this.minPriceValue ? this.actualPrice : null , type: this.filterType !=='None' ? this.filterType : null})
  }

  deleteFilter(){
   this.deleteFilters.emit();
   this.filterType='None'
  }

  deleteCart(){
    if(localStorage.getItem('user')){
    this.cartService.deleteCart(JSON.parse(localStorage.getItem('user')as string).userId)
    }
  }

  order(){
    this.router.navigateByUrl('/cart')
  }
}
