export interface ProductData {
	[x: string]: any;
	amount: string;
	key: number;
	price: number;
	stock: number;
	title: string;
}

export interface Product {
	title: string;
	data: ProductData;
}
