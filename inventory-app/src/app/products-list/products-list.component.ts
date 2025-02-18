import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductImageComponent } from "../product-image/product-image.component";
import { ProductDepartmentComponent } from "../product-department/product-department.component";
import { PriceDisplayComponent } from "../price-display/price-display.component";
import { ProductRowComponent } from "../product-row/product-row.component";

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [ProductImageComponent, ProductDepartmentComponent, PriceDisplayComponent, ProductRowComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
	@Input() productList!: Product[];

	@Output() onProductSelected: EventEmitter<Product>;

	private currentProduct!: Product;

	constructor() {
		this.onProductSelected = new EventEmitter();
	}

	clicked(product: Product): void {
		this.currentProduct = product;
		this.onProductSelected.emit(product);
	}

	isSelected(product: Product): boolean {
		if (!product || !this.currentProduct) {
			return false;
		}
		return product.sku === this.currentProduct.sku;
	}
}
