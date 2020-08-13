import { CartService } from './../../services/cart.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent implements OnInit {
  @Input() product;
  currnetId: any;
  cartItems = 0;

  constructor(private _cartService: CartService) { }

  addCart(product) {
    this.cartItems += 1;
    this._cartService.getCartItems(product, 'add');
  }

  removeCart(product) {
    if (this.cartItems > 0) {
      this.cartItems -= 1;
      this._cartService.removeProduct(product, 'remove');
    }
  }

  ngOnInit() {
   console.log(this.product);
   this.cartItems = this.product.num;
  }

}
