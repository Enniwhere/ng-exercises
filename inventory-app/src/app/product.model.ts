/**
* Class for 'Product's for the inventory
*/

export class Product {
	constructor(
		public sku: string,
		public name: string,
		public imageUrl: string,
		public department: string[],
		public price: number) {
		}
}
