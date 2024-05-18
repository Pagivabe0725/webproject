import { Injectable } from '@angular/core';
import { Order } from '../Interfaces/Order';
import { AngularFirestore } from '@angular/fire/compat/firestore'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private afs: AngularFirestore) { }

  setOrder(order: Order) {
    return this.afs.collection('Order').add(order);
  }


}
