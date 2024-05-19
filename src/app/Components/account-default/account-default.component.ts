import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { OrderService } from '../../Services/order.service';
import { Order } from '../../Interfaces/Order';
import { Subscription } from 'rxjs';
import { User } from '../../Interfaces/User';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../Interfaces/Product';


@Component({
  selector: 'app-account-default',
  templateUrl: './account-default.component.html',
  styleUrl: './account-default.component.scss'
})
export class AccountDefaultComponent implements OnInit {

  ordersList?: Array<Order>;
  page: string = 'info';
  actualUser:User = JSON.parse(localStorage.getItem('user')as string);
  product: FormGroup = new FormGroup({
    type: new FormControl('',),
    price: new FormControl('',),
    actionPrice: new FormControl('',),
    from: new FormControl('',),
    quantity: new FormControl('',),
    name: new FormControl('',)
  })

  constructor(private orderService: OrderService) { }


  ngOnInit(): void {

    let sub: Subscription = this.orderService.getMyOrders(JSON.parse(localStorage.getItem('user') as string).userId).subscribe(

      (data: any) => {
        this.ordersList = data;
        console.log(this.ordersList)
        sub.unsubscribe();
      },
      err => console.error(err)
    );

    console.log(this.actualUser)
  }

  changePage(page: string): void {
    this.page = page;
  }



}
