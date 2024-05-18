import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from '../../Components/welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
  ]
})
export class WelcomeModule { }
