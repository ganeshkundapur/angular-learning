import { SharedModule } from './../shared.module';


import { CartViewComponent } from './../../../pages/cart-view/cart-view.component';
import { NgModule } from '@angular/core';
import { CartViewRoutingModule } from './cart-view-routing.module';


@NgModule({
  declarations: [
    CartViewComponent,
  ],
  imports: [
    CartViewRoutingModule,
    SharedModule
  ]
})
export class CartViewModule { }
