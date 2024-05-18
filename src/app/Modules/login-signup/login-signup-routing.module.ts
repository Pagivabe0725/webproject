import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModuleDefaultComponent } from '../../Components/login-module-default/login-module-default.component';
import { LoginComponent } from '../../Components/login/login.component';
import { SignupComponent } from '../../Components/signup/signup.component';

const routes: Routes = [

  {
    path:':values',
    component:LoginModuleDefaultComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginSignupRoutingModule { }
