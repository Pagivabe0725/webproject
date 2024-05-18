import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { CartItem } from '../Interfaces/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private afs: AngularFirestore) {
  }

  getMyCart() {
    return this.afs.collection('Cart').doc(JSON.parse(localStorage.getItem('user')as string).userId).valueChanges();
  }

  updateMyCart(cart: Array<CartItem>) {
    let obj = {cartArray: cart}
    return this.afs.collection('Cart').doc(JSON.parse(localStorage.getItem('user')as string).userId).set(obj);

  }

  checkNullItem(cart:Array<CartItem>): Array<CartItem>{
    let helperArray:Array<CartItem>=[]
    for (let i = 0; i < cart.length; i++) {
      if(cart[i].piece!=0){
        helperArray.push(cart[i]);
      }
    }
    return helperArray;
  }

  deleteCart(id:string) : void{
    this.afs.collection('Cart').doc(id).delete()
    window.location.reload();
  }

}



