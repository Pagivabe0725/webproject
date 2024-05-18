import { Pipe, PipeTransform } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { Product } from '../Interfaces/Product';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'piece',
  standalone: true
})
export class PiecePipe implements PipeTransform {

  constructor(private productService : ProductService){}
  productArray?:Array<Product>;

  transform(value: string,array: Array<Product> | undefined, ...args: unknown[]): string {
   
    if(array){
    for (let i = 0; i < array.length; i++) {
      if(value==array[i].name){
        return array[i].quantity
      }
    }
  }
    return '';
  }

}
