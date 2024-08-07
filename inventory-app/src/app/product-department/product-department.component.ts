import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  standalone: true,
  imports: [],
  templateUrl: './product-department.component.html',
  styleUrl: './product-department.component.css'
})
export class ProductDepartmentComponent {

	@Input() product!: Product;
}
