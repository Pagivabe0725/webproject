import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Interfaces/Product';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../../Interfaces/CartItem';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-shop-default',
  templateUrl: './shop-default.component.html',
  styleUrl: './shop-default.component.scss'
})
export class ShopDefaultComponent implements OnInit, OnDestroy {

  orderedProductList: Array<Product> = []
  allProductList: Array<Product> = [];
  orderedProductNumber: number = 0;
  loading: boolean;
  getSubscription?: Subscription;
  user?: string;
  maxPrice?: number;
  minPrice?: number;
  fullPrice: number = 0;
  cartArray: Array<CartItem> = [];

  constructor(private productService: ProductService, private act: ActivatedRoute, private cartService: CartService) {
    this.loading = true;
  }

  ngOnInit(): void {
    let sub: Subscription = this.act.params.subscribe(
      (data: any) => {
        if (data.actualUser) {
          this.user = data.actualUser;
        }
      },
      error => console.log('Error: ' + error),
      () => sub.unsubscribe()
    )
    this.getAllProduct()

  }

  ngOnDestroy(): void {
    this.getSubscription?.unsubscribe();
  }
  getAllProduct() {

    this.getSubscription = this.productService.getAllProduct().subscribe(
      data => {
        this.allProductList = data;
        this.loading = false;
        this.calculateMaxPrice();
        this.calculateMinPrice();
      },
      error => { console.log(error) },
    )

  }

  calculateMaxPrice(): void {
    let max: number = 0;
    for (let i = 0; i < this.allProductList.length; i++) {
      if (this.allProductList[i].action) {
        if (this.allProductList[i].actionPrice > max) {
          max = this.allProductList[i].actionPrice;
        }
      } else {
        if (this.allProductList[i].price > max) {
          max = this.allProductList[i].price;
        }
      }
    }
    this.maxPrice = max;
  }

  calculateMinPrice(): void {
    let min: number = this.allProductList[0].action ? this.allProductList[0].actionPrice : this.allProductList[0].price;
    for (let i = 0; i < this.allProductList.length; i++) {
      if (this.allProductList[i].action) {
        if (this.allProductList[i].actionPrice < min) {
          min = this.allProductList[i].actionPrice;
        }
      } else {
        if (this.allProductList[i].price < min) {
          min = this.allProductList[i].price;
        }
      }
    }
    this.minPrice = min;
  }

  filter(obj: { maxPrice: number | null | undefined, type: string | null }) {
    console.log(obj)

    if (obj.maxPrice && obj.type) {
      let sub: Subscription = this.productService.getProductWithTypeAndPriceFilter(obj.maxPrice, obj.type).subscribe(
        data => {
          if (data) {
            this.allProductList = data;
            console.log(data)
          }
          sub.unsubscribe();
        },
        error => console.log(error)
      )
    } else if (obj.maxPrice && !obj.type) {
      let sub: Subscription = this.productService.getProductWithPriceFilter(obj.maxPrice).subscribe(
        data => {
          if (data) {
            this.allProductList = data;

          }
          sub.unsubscribe();
        },
        error => console.log(error)
      )
    } else if (!obj.maxPrice && obj.type) {
      let sub: Subscription = this.productService.getProductWithTypeFilter(obj.type).subscribe(
        data => {
          if (data) {
            this.allProductList = data;
          }
          sub.unsubscribe();
        },
        error => console.log(error)
      )
    }
  }

  updateCard() {
    this.cartService.updateMyCart(this.cartArray).then(_ => { }, error => console.log(error));
  }

  deleteFilters() {
    this.getAllProduct()
    this.calculateMaxPrice()
    this.calculateMinPrice()
  }

  changeFullPrice(value: CartItem): void {
    let isInArray = false;
    for (let i = 0; i < this.cartArray?.length; i++) {
      if (this.cartArray[i].name === value.name) {
        isInArray = true;
        this.cartArray[i].price = value.price;
        this.cartArray[i].piece = value.piece;
      }
    }
    if (!isInArray) {
      this.cartArray.push(value)
    }
    this.cartArray = this.cartService.checkNullItem(this.cartArray)
    this.setFullPrice()
    this.updateCard()
  }

  setFullPrice(): void {
    let helper: number = 0;
    for (let i = 0; i < this.cartArray.length; i++) {
      helper += this.cartArray[i].price;
    }
    this.fullPrice = helper;
  }
}
