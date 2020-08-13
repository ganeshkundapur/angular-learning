import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { CartButtonComponent } from './../components/cart-button/cart-button.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

@NgModule({
 imports: [
   CommonModule,
   MaterialModule,
   FlexLayoutModule
 ],
 declarations: [
   CartButtonComponent
  ],
 exports: [
   CommonModule,
   CartButtonComponent,
   MaterialModule,
   FlexLayoutModule
  ]
})

export class SharedModule {}
