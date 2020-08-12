import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardComponent } from './../../components/product-card/product-card.component';

import { ProductsComponent } from './../../../pages/products/products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductsRoutingModule,
    FlexLayoutModule
  ]
})
export class ProductsModule { }
