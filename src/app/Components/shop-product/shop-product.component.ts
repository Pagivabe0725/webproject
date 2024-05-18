import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Product } from '../../Interfaces/Product';
import { ProductService } from '../../Services/product.service';
import { Subscription } from 'rxjs';
import { CartItem } from '../../Interfaces/CartItem';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrl: './shop-product.component.scss'
})
export class ShopProductComponent implements OnInit, OnDestroy {

  numberOfOrderedProduct: number = 0;
  @Input() product?: Product;
  @Output() addProductNumber: EventEmitter<Product> = new EventEmitter();
  @Output() minusProductNumber: EventEmitter<Product> = new EventEmitter();
  @Output() changePrice: EventEmitter<CartItem> = new EventEmitter();
  imageUrl?: string;
  sub?: Subscription;
  cartSubscription?: Subscription;
  cartArray: Array<CartItem> = [];
  productInCart: number = -1;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    if (this.product) {
      this.sub = this.productService.getImageById(this.product?.imageId).subscribe(
        data => this.imageUrl = data,
        error => console.error(error),
        () => this.sub?.unsubscribe()
      );
    }

    this.cartSubscription = this.cartService.getMyCart().subscribe(
      (data: any) => {
        if(data){
        this.cartArray = data.cartArray;
        if (this.cartArray) {
          //console.log(this.cartArray)
          this.setPieces()
          this.setDefaultPieces()
          this.cartSubscription?.unsubscribe()
        }
        }

      }, error => console.error(error)
    )
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  setPieces(): void {
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].name === this.product?.name) {
        this.productInCart = i
        this.numberOfOrderedProduct = this.cartArray[i].piece;
        break;
      }
    }
  }

  add(): void {
    this.numberOfOrderedProduct++;
    if (this.productInCart > -1 && this.product) {
      this.cartArray[this.productInCart].price += this.product.action ? this.product.actionPrice : this.product.price;
      this.cartArray[this.productInCart].piece += 1;
      this.changePrice.emit(this.cartArray[this.productInCart])
    } else {
      if (this.product) {
        let obj: CartItem = {
          name: this.product.name,
          piece: 1,
          price: this.product.actionPrice
        }
        this.changePrice.emit(obj)
      }

    }
  }

  minus(): void {
    if (this.numberOfOrderedProduct > 0 && this.product) {
      this.numberOfOrderedProduct--;
      this.cartArray[this.productInCart].price -= this.product.action ? this.product.actionPrice : this.product.price;
      this.cartArray[this.productInCart].piece -= 1;
      this.changePrice.emit(this.cartArray[this.productInCart])
    }
  }

  setDefaultPieces(): void {
    for (let i = 0; i < this.cartArray.length; i++) {
      if (this.cartArray[i].name === this.product?.name) {
        this.changePrice.emit(this.cartArray[i]); 
        break;
      }

    }
  }
}
