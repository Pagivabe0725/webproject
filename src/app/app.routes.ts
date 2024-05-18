import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'welcome',
        loadChildren:() => import('../app/Modules/welcome/welcome.module').then(m => m.WelcomeModule),
        title:'welcome'
    },
    {
        path:'login-signup',
        loadChildren:() => import('../app/Modules/login-signup/login-signup.module').then(m=> m.LoginSignupModule),
        title:'login-signup'
    },
    {
        path:'shop',
        loadChildren:() => import('../app/Modules/shop/shop.module').then(m=> m.ShopModule),
        title:'shop'
    },
    {
        path:'cart',
        loadChildren:() => import('../app/Modules/cart/cart.module').then(m=> m.CartModule),
        title:'cart',
    },
    {
        path:'account',
        loadChildren:() => import('../app/Modules/account/account.module').then(m=> m.AccountModule),
        title:'account',
    },
    {
        path:'',
        redirectTo:'welcome',
        pathMatch:'full',
        
    },
    {
        path:'**',
        redirectTo:'welcome',
        pathMatch:'full',
        
    }

];
