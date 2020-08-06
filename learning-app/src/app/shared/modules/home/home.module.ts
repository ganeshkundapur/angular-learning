import { HomeComponent } from './../../../pages/home/home.component';


import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations : [
   HomeComponent
  ]
})

export class HomePageModule {}
