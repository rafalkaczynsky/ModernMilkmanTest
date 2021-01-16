export interface Stock {
	products: Product[];
	isLoading: boolean;
	error: string;
}

export interface Product {
	name: string;
}
