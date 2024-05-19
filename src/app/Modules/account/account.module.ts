import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AccountRoutingModule } from './account-routing.module';
import { AccountDefaultComponent } from '../../Components/account-default/account-default.component';
import { OrderService } from '../../Services/order.service';
import { AngularFireModule } from '@angular/fire/compat';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderListPipe } from '../../Pipes/order-list.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [AccountDefaultComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    OrderListPipe,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      "projectId": "web-projekt-fa8c1", "appId": "1:641392570973:web:b87723ded283cd540693b4",
      "storageBucket": "web-projekt-fa8c1.appspot.com", "apiKey": "AIzaSyARIZ0zi5Zyp3v4dQYUlbF_S9QGtlVp-50", "authDomain": "web-projekt-fa8c1.firebaseapp.com",
      "messagingSenderId": "641392570973", "measurementId": "G-XRVT4K2P1R"
    })
  ],
  providers: [OrderService]
})
export class AccountModule { }
