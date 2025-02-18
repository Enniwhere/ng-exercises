import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  standalone: true,
  imports: [],
  template: `
  	<div class="price-display">\${{ price }}</div>
  `,
  styleUrl: './price-display.component.css'
})
export class PriceDisplayComponent {
	@Input() price!: number;

}
