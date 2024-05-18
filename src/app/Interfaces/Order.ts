import { CartItem } from "./CartItem";

export interface Order {
    buyerId:string,
    price:number,
    cart:Array<CartItem>
} 