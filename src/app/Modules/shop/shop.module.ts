import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopDefaultComponent } from '../../Components/shop-default/shop-default.component';
import { ShopFilterMenuComponent } from '../../Components/shop-filter-menu/shop-filter-menu.component';
import { ShopProductComponent } from '../../Components/shop-product/shop-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire/compat';
import { ProductService } from '../../Services/product.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../Services/cart.service';



@NgModule({
  declarations: [ShopDefaultComponent, ShopFilterMenuComponent, ShopProductComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    FormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp({
      "projectId": "web-projekt-fa8c1", "appId": "1:641392570973:web:b87723ded283cd540693b4",
      "storageBucket": "web-projekt-fa8c1.appspot.com", "apiKey": "AIzaSyARIZ0zi5Zyp3v4dQYUlbF_S9QGtlVp-50", "authDomain": "web-projekt-fa8c1.firebaseapp.com",
      "messagingSenderId": "641392570973", "measurementId": "G-XRVT4K2P1R"
    }
    ),
  ],
  providers:[ProductService, CartService]
})
export class ShopModule { }
