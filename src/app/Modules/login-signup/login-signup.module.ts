import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginComponent } from '../../Components/login/login.component';
import { SignupComponent } from '../../Components/signup/signup.component';
import { LoginModuleDefaultComponent } from '../../Components/login-module-default/login-module-default.component';
import {  MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select';
import { UserService } from '../../Services/user.service';
import { AngularFireModule } from '@angular/fire/compat';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    LoginModuleDefaultComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    LoginSignupRoutingModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AngularFireModule,
    AngularFireModule.initializeApp({
      "projectId": "web-projekt-fa8c1", "appId": "1:641392570973:web:b87723ded283cd540693b4",
      "storageBucket": "web-projekt-fa8c1.appspot.com", "apiKey": "AIzaSyARIZ0zi5Zyp3v4dQYUlbF_S9QGtlVp-50", "authDomain": "web-projekt-fa8c1.firebaseapp.com",
       "messagingSenderId": "641392570973", "measurementId": "G-XRVT4K2P1R"
    }
    ),
  ],
  providers:[UserService]
})
export class LoginSignupModule { }
