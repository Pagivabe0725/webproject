import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDefaultComponent } from '../../Components/cart-default/cart-default.component';

const routes: Routes = [

  {
    path:'',
    component:CartDefaultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
