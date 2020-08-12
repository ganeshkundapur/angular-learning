import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart$: BehaviorSubject<any> = new BehaviorSubject(null);
  cartSource = this.cart$.asObservable();
  totalCartItems = 0
  prevCart = 0;


  products: any = [
    {id: 1, productName: 'Apple', url: 'https://img3.exportersindia.com/product_images/bc-full/2019/1/5128568/apple-1546928018-4628939.jpeg'},
    {id: 2, productName: 'Orange', url: 'https://5.imimg.com/data5/CP/DJ/MY-10247618/fresh-orange-250x250.jpg'},
    {id: 3, productName: 'Grapes', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'},
    {id: 4, productName: 'Mango', url: 'https://www.fruitmonster.co.nz/wp-content/uploads/2020/04/MANGO-w-SHADOW-610x762px.png'},
    {id: 5, productName: 'Applee', url: 'https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg'},
    {id: 6, productName: 'Orangee', url: 'https://5.imimg.com/data5/CP/DJ/MY-10247618/fresh-orange-250x250.jpg'},
    {id: 7, productName: 'Grapese', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'},
    {id: 8, productName: 'Mangoe', url: 'https://www.fruitmonster.co.nz/wp-content/uploads/2020/04/MANGO-w-SHADOW-610x762px.png'},

  ]


  constructor() {
    this.products.map(x => x.num = 0);
  }

  getCartItems(cart, state) {
    const productExistInCart = this.products.find(({productName}) => productName === cart.productName);
    if(state === 'add') {
      productExistInCart.num += 1;
      this.cart$.next(this.products);
      this.totalCartItems = 0
      this.cartSource.subscribe(res => {
        console.log(res);
        for(let i = 0; i < res.length; i ++) {
        this.totalCartItems += res[i].num;

       }
     });
    }
  }

  removeProduct(product, state) {
    const productExistInCart = this.products.find(({productName}) => productName === product.productName);
    productExistInCart.num -= 1;
    this.cart$.next(this.products);
    this.totalCartItems = 0;
    this.cartSource.subscribe(res => {
      console.log(res);
      for(let i = 0; i < res.length; i ++) {
      this.totalCartItems += res[i].num;

     }
   });
   }
}
