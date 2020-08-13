import { SharedModule } from './../shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './../../components/product-card/product-card.component';

import { ProductsComponent } from './../../../pages/products/products.component';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule,
    FlexLayoutModule,
  ],
})
export class ProductsModule { }
