import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  addedItems = [];

  constructor(private _cartService: CartService) { }

  ngOnInit() {
   this._cartService.products.filter(product => {

        if(product.num > 0) {
          console.log(product);
          this.addedItems.push(product);
          console.log( this.addedItems);
        }

   })

  }

}
