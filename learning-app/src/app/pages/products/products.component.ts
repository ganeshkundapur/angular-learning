import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [
    {id: 1, productName: 'Apple', url: 'https://img3.exportersindia.com/product_images/bc-full/2019/1/5128568/apple-1546928018-4628939.jpeg'},
    {id: 2, productName: 'Orange', url: 'https://5.imimg.com/data5/CP/DJ/MY-10247618/fresh-orange-250x250.jpg'},
    {id: 3, productName: 'Grapes', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'},
    {id: 4, productName: 'Mango', url: 'https://www.fruitmonster.co.nz/wp-content/uploads/2020/04/MANGO-w-SHADOW-610x762px.png'},
    {id: 5, productName: 'Apple', url: 'https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg'},
    {id: 6, productName: 'Orange', url: 'https://5.imimg.com/data5/CP/DJ/MY-10247618/fresh-orange-250x250.jpg'},
    {id: 7, productName: 'Grapes', url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'},
    {id: 8, productName: 'Mango', url: 'https://www.fruitmonster.co.nz/wp-content/uploads/2020/04/MANGO-w-SHADOW-610x762px.png'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
