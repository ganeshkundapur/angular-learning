import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path : '', loadChildren: () => import('./shared/modules/home/home.module').then(m => m.HomePageModule)},
  { path : 'products', loadChildren: () => import('./shared/modules/products/products.module').then(m => m.ProductsModule)},
  { path: 'signIn', component: LoginComponent},
  { path: 'signUp', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
