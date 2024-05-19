import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '../Interfaces/CartItem';

@Pipe({
  name: 'orderList',
  standalone: true
})
export class OrderListPipe implements PipeTransform {

  transform(array:Array<CartItem>, ...args: unknown[]): string {
    let result:string = ''
    for (let i = 0; i < array.length; i++) {
      result+=array[i].name+':'+array[i].piece+','
    }
    return result;
  }

}
