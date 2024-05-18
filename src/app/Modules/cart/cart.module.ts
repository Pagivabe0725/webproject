import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { MatCardModule } from '@angular/material/card';
import { CartDefaultComponent } from '../../Components/cart-default/cart-default.component';
import { CartService } from '../../Services/cart.service';
import { AngularFireModule } from '@angular/fire/compat';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderService } from '../../Services/order.service';
import { PiecePipe } from '../../Pipes/piece.pipe';
import { ProductService } from '../../Services/product.service';


@NgModule({
  declarations: [CartDefaultComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    AngularFireModule,
    PiecePipe,
    AngularFireModule.initializeApp({
      "projectId": "web-projekt-fa8c1", "appId": "1:641392570973:web:b87723ded283cd540693b4",
      "storageBucket": "web-projekt-fa8c1.appspot.com", "apiKey": "AIzaSyARIZ0zi5Zyp3v4dQYUlbF_S9QGtlVp-50", "authDomain": "web-projekt-fa8c1.firebaseapp.com",
      "messagingSenderId": "641392570973", "measurementId": "G-XRVT4K2P1R"
    })
  ],
  providers: [CartService, OrderService, ProductService]
})
export class CartModule { }
