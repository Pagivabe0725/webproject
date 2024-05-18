import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDefaultComponent } from '../../Components/account-default/account-default.component';

const routes: Routes = [
  {
    path:'',
    component:AccountDefaultComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
