import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDefaultComponent } from '../../Components/shop-default/shop-default.component';

const routes: Routes = [
  {
    path:':actualUser',
    component:ShopDefaultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
