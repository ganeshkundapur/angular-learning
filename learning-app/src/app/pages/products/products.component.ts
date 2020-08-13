import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [];

  constructor(private _cartServices: CartService) { }

  ngOnInit() {
    this.products = this._cartServices.products;
    console.log( this.products);
  }

}
