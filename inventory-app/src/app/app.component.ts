import { Component, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product.model';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'inventory-app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'inventory-app';

  products: Product[];

  constructor() {
	  this.products = [
		  new Product(
			  'MYSHOES',
			  'Black Running Shoes',
			  'products/black-shoes.jpg',
			  ['Men', 'Shoes', 'Running Shoes'],
			  109.99),
		  new Product(
		  	  'NEATOJACKET',
		  	  'Blue Jacket',
			  'products/blue-jacket.jpg',
			  ['Women', 'Apparel', 'Jackets & Vests'],
			  238.99),
		  new Product(
			  'NICEHAT',
			  'A Nice Black Hat',
			  'products/black-hat.jpg',
			  ['Men', 'Accessories', 'Hats'],
			  29.99)
		  ];
	  }

	  productWasSelected(product: Product): void {
		  console.log('Product clicked: ', product);
	  }
}
