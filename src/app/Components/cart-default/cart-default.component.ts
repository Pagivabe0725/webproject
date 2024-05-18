import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../Interfaces/CartItem';
import { CartService } from '../../Services/cart.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { OrderService } from '../../Services/order.service';
import { Order } from '../../Interfaces/Order';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Interfaces/Product';



@Component({
  selector: 'app-cart-default',
  templateUrl: './cart-default.component.html',
  styleUrl: './cart-default.component.scss'
})
export class CartDefaultComponent implements OnInit {

  cartList?: Array<CartItem>
  productList?: Array<Product> | undefined;


  constructor(private cartService: CartService,
    private location: Location, private orderService: OrderService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let sub: Subscription = this.cartService.getMyCart().subscribe(
      (data: any) => {
        if (data) {
          this.cartList = data.cartArray;
          console.log(this.cartList)
        }
      },
      error => console.error(error),
      () => sub.unsubscribe()
    )

    let sub2 : Subscription = this.productService.getAllProduct().subscribe(
      data => {
        this.productList = data;
      },
      error => { console.log(error) },
    )
  }

  getFullPrice(): number {
    let full = 0;
    if (this.cartList) {
      for (let i = 0; i < this.cartList?.length; i++) {
        full += this.cartList[i].price;
      }
    }
    return full;
  }

  back(): void {
    this.location.back()
  }

  order() {
    if (this.cartList) {
      let obj: Order = {
        buyerId: JSON.parse(localStorage.getItem('user') as string).userId,
        price: this.getFullPrice(),
        cart: this.cartList,
      }
      this.orderService.setOrder(obj).then(
        () => {
          this.cartService.deleteCart(JSON.parse(localStorage.getItem('user') as string).userId);
          this.cartList = [];
        }
      ).catch(err => console.error(err)
      ).finally(() => this.back())
    }
  }
  
}
