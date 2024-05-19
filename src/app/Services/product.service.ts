import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Product } from '../Interfaces/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private storage: AngularFireStorage, private afs: AngularFirestore) { }

  getAllProduct() {
    return this.afs.collection<Product>('Products').valueChanges()
  }

  getImageById(imageId: string) {
    return this.storage.ref(imageId).getDownloadURL()
  }

  getProductWithPriceFilter(maxPrice: number) {
    return this.afs.collection<Product>('Products', ref => ref.where('actionPrice', '<=', maxPrice)).valueChanges();
  }

  getProductWithTypeFilter(type: string) {
    return this.afs.collection<Product>('Products', ref => ref.where('type', '==', type)).valueChanges();
  }

  getProductWithTypeAndPriceFilter(maxPrice: number, type: string) {
    return this.afs.collection<Product>('Products', ref => ref.where('type', '==', type).where('actionPrice', '<=', maxPrice)).valueChanges();
  }

  addProduct(product: Product){
    return this.afs.collection<Product>('Product').add(product);

  }

  


}
