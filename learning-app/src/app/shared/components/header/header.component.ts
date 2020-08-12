import { CartService } from './../../services/cart.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor(public _userService: UserService,
             private _cartService: CartService) { }

  logout() {
   this._userService.doLogout();
  }

  getCartItems() {
    this._cartService.cartSource.subscribe(res => {
      console.log(res);
    })
  }

  ngOnChanges() {

  }

  ngOnInit() {
  }

}
